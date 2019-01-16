import Cookies from "universal-cookie";
import UserPool from "../UserPool";
import "./Account.css";

const AccountContext = React.createContext();

class Account extends React.Component {
  getUser = () => UserPool.getCurrentUser();

  // requestLogin true: Send the user to /login
  // requestLogin undefined: Send user to /
  // requestLogin false: Don't send the user anywhere
  logout = requestLogin => {
    // Get the current logged in user
    const user = this.getUser();

    // Check if a user was actually logged in
    if (user) {
      // Sign that user out
      user.signOut();
    }

    // If we are on our front end
    if (window) {
      if (requestLogin) {
        // Ask the user to login again
        window.location = "/login";
      } else if (requestLogin !== false) {
        // Send the user to the home page
        window.location = "/";
      }
    }
  };

  getSession = async (redirect = true) => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      console.log("User:", user);
      if (user) {
        user.getSession((err, session) => {
          const apiKey = new Cookies().get("api-key");

          if (err || !session.isValid() || !apiKey) {
            this.logout(redirect);
            reject();
            return;
          }

          const token = session.getIdToken().getJwtToken();

          resolve({
            user,
            apiKey,
            payload: session.getIdToken().decodePayload(),
            token,
            sub: session.accessToken.payload.sub,
            headers: {
              "x-api-key": apiKey,
              Authorization: token
            }
          });
        });
      } else {
        this.logout(redirect);
        reject();
      }
    });
  };

  render() {
    return (
      <AccountContext.Provider
        value={{
          logout: this.logout,
          getSession: this.getSession
        }}
      >
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}

export { Account, AccountContext };
