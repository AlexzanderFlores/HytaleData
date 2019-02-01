import Head from "next/head";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import Checkbox from "../Checkbox/Checkbox";
import UserPool from "../UserPool";
import SmartLink from "../SmartLink";
import Recaptcha from "../Recaptcha/Recaptcha";
import "./BetaTesting.css";

export default class BetaTesting extends React.Component {
  constructor(props) {
    super(props);

    this.projects = [
      {
        name: "projectServer",
        display: "Server Network"
      },
      {
        name: "projectList",
        display: "Server List Website"
      },
      {
        name: "projectHost",
        display: "Server Host"
      },
      {
        name: "projectCommunity",
        display: "Forum/Discord/etc Community"
      },
      {
        name: "projectMarketplace",
        display: "Marketplace Website"
      }
    ];

    const defaultState = {
      result: "",
      email: "",
      firstname: "",
      password: "",
      passwordError: "",
      projectOther: false,
      projectOtherDescription: "",
      affiliateProgram: false,
      showSurvey: true,
      surveyHeight: "0"
    };
    this.projects.forEach(project => (defaultState[project.name] = false));
    this.state = defaultState;
  }

  componentDidMount() {
    const query = window.location.search;
    const values = new URLSearchParams(query);
    const noSurvey = values.get("noSurvey") === "true";
    const projectList = values.get("projectList") === "true";

    if (noSurvey) {
      this.setState({ showSurvey: false, projectList });
    }
  }

  onToggle = event => {
    const { name } = event.target;
    this.setState({ [name]: !this.state[name] });
  };

  onChange = event => {
    const { name, value } = event.target;
    if (name === "password") {
      this.passwordCheck(value);
    }
    this.setState({ [name]: value }, this.formCheck);
  };

  passwordCheck = password => {
    if (password.length < 8) {
      this.setState(
        {
          passwordError: "Password must be at least 8 characters long."
        },
        this.formCheck
      );
      return;
    }

    if (!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/g)) {
      this.setState(
        {
          passwordError:
            "Password must contain an upper and lower case letter, and a number."
        },
        this.formCheck
      );
      return;
    }

    this.setState({ passwordError: "" }, this.formCheck);
  };

  formCheck = () => {
    const { email, firstname, password, passwordError } = this.state;
    let surveyHeight = "0";

    if (email && firstname && password && !passwordError) {
      surveyHeight = "325px";
    }

    this.setState({ surveyHeight });
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.passwordError) {
      this.setState({
        result: "Please fix password errors above."
      });
      return;
    }

    let keys = Object.keys(this.state);
    keys = keys.filter(key => this.state[key]);
    const params = {};
    keys.forEach(key => {
      params[key] = this.state[key];
    });

    const { email, firstname, password } = this.state;
    const uri = `/email-subscribe?email=${email}&firstname=${firstname}`;

    console.log(uri);

    delete params.email;
    delete params.firstname;
    delete params.password;
    delete params.passwordError;
    delete params.result;
    delete params.surveyHeight;
    delete params.showSurvey;

    fetch(uri, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(result => {
        // Don't set the result text here if we're creating an account
        if (!password) {
          this.setState({ result: result.message });
        }
      })
      .catch(error => {
        // Don't set the result text here if we're creating an account
        if (!password) {
          this.setState({ result: error.message || error });
        }
      });

    const attributes = [
      new CognitoUserAttribute({ Name: "name", Value: firstname })
    ];

    UserPool.signUp(email, password, attributes, null, (err, data) => {
      if (err) {
        this.setState({ result: err.message });
      } else {
        this.setState({
          result:
            "Account Created! Check your email to confirm your account. You will be notified when beta testing is live. Follow our social media below for frequent updates or to get in contact!"
        });
      }
    });
  };

  render() {
    const {
      email,
      firstname,
      password,
      passwordError,
      surveyHeight,
      projectOther,
      projectOtherDescription,
      result
    } = this.state;

    return (
      <>
        <Head>
          <title>
            Hytale Data - The tools &amp; metrics you need to grow your Hytale
            server.
          </title>
        </Head>

        <div id="beta-testing-container" className="center">
          <div id="beta-testing">
            <h2>Signup for Free Beta Testing</h2>
            <form onSubmit={this.onSubmit} className="center">
              <div className="center-v">
                <label htmlFor="email">
                  Email Address<span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  placeholder="Required"
                  required
                />
              </div>

              <div className="center-v">
                <label htmlFor="name">
                  First Name<span className="required">*</span>
                </label>
                <input
                  type="firstname"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={this.onChange}
                  placeholder="Required"
                  required
                />
              </div>

              <div className="center-v">
                <label htmlFor="password">
                  Password<span className="required">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  placeholder="Required"
                  required
                />
              </div>

              <div id="password-error">{passwordError}</div>

              {this.state.showSurvey && (
                <div
                  id="optional-survey"
                  style={{
                    height: surveyHeight
                  }}
                >
                  <div id="project-type" className="center-v">
                    <label>
                      What are you making in Hytale?{" "}
                      <div className="optional">(Optional)</div>
                    </label>

                    {this.projects.map(project => (
                      <Checkbox
                        key={project.name}
                        id={project.name}
                        handler={this.onToggle}
                        checked={this.state[project.name]}
                      >
                        {project.display}
                      </Checkbox>
                    ))}

                    <div id="other">
                      <Checkbox
                        id="projectOther"
                        handler={this.onToggle}
                        checked={projectOther}
                      >
                        Other
                      </Checkbox>
                      <input
                        id="projectOtherDescription"
                        name="projectOtherDescription"
                        value={projectOtherDescription}
                        onChange={this.onChange}
                        placeholder="Description (Optional)"
                      />
                    </div>

                    <div id="affiliate-program">
                      <Checkbox
                        key="affiliateProgram"
                        id="affiliateProgram"
                        handler={this.onToggle}
                        checked={this.state.affiliateProgram}
                      >
                        {/* Are you interested in our{"  "}
                        <SmartLink
                          display="Affiliate Program"
                          newTab={true}
                          underline
                          style={{ marginLeft: "5px" }}
                        />
                        ? */}
                        Are you interested in our Affiliate Program?
                      </Checkbox>
                    </div>
                  </div>
                </div>
              )}

              <div className="center">
                <span id="legal-agree">
                  <Recaptcha action="beta_signup" />
                  By signing up you agree to the Hytale Data{" "}
                  <SmartLink display="terms of service" /> and{" "}
                  <SmartLink display="privacy policy" />.
                </span>
                <button
                  type="submit"
                  className={`submit-button ${
                    surveyHeight === "0" ? "disabled-button" : ""
                  }`}
                >
                  CREATE ACCOUNT
                </button>

                <div id="email-sub-result" className="center">
                  {result}
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
