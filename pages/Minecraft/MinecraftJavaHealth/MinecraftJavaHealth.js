import Head from "next/head";
import NavFooter from "../../NavFooter";
import ServerStats from "./ServerStats/ServerStats";
import ServerList from "./ServerList/ServerList";
import AddServer from "./AddServer/AddServer";
import ServerVersions from "./ServerVersions/ServerVersions";
import SmartLink from "../../SmartLink";
import "./MinecraftJavaHealth.css";

export default class MinecraftJavaHealth extends React.Component {
  state = {
    left: "-350px",
    width: "350px",
    opacity: 1,
    yes: null,
    popupText: "Do you plan on creating a Hytale server?",
    windowWidth: 0
  };

  componentDidMount() {
    if (window) {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    setTimeout(() => {
      const { windowWidth } = this.state;
      this.setState({
        left: windowWidth < 450 ? "0" : "50px",
        width: windowWidth < 450 ? "100%" : "350px"
      });
    }, 1000 * 6);
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }

  updateWindowDimensions = () => {
    if (window) {
      const windowWidth = window.innerWidth;
      this.setState({ windowWidth });
    }
  };

  onClick = () => {
    this.setState(
      {
        opacity: 0,
        height: "175px",
        yes: (
          <SmartLink link="beta-testing" newTab>
            <button>Yes</button>
          </SmartLink>
        )
      },
      () => {
        setTimeout(() => {
          this.setState({
            popupText: (
              <span>
                Hytale Data will be offering a{" "}
                <SmartLink
                  display="collection of plugins"
                  link="planned-solutions"
                  newTab
                  underline
                />{" "}
                to help servers grow. Are you interested in free beta testing?
              </span>
            ),
            opacity: 1
          });
        }, 500);
      }
    );
  };

  onClose = () => {
    this.setState({ left: "75px" }, () => {
      setTimeout(() => {
        this.setState({ left: "-350px", width: "350px" });
      }, 250);
    });
  };

  render() {
    return (
      <NavFooter>
        <Head>
          <title>Minecraft Java Health - Hytale Data</title>
        </Head>

        <ServerStats />

        <div id="server-middle" className="center">
          <AddServer />
          <ServerVersions />
        </div>

        <ServerList />

        <div
          id="popup"
          className="center"
          style={{
            left: this.state.left,
            height: this.state.height,
            width: this.state.width
          }}
        >
          <div id="popup-close" title="Close" onClick={this.onClose}>
            X
          </div>
          <p style={{ opacity: this.state.opacity }}>{this.state.popupText}</p>
          {this.state.yes || <button onClick={this.onClick}>Yes</button>}
        </div>
      </NavFooter>
    );
  }
}
