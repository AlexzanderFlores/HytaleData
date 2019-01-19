import Head from "next/head";
import NavFooter from "../NavFooter";
import Checkbox from "../Checkbox/Checkbox";
import features from "../Features";
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
      password: "",
      projectOther: false,
      projectOtherDescription: ""
    };
    features.forEach(feature => (defaultState[feature.id] = false));
    this.projects.forEach(project => (defaultState[project.name] = false));
    this.state = defaultState;
  }

  onToggle = event => {
    const { name } = event.target;
    this.setState({ [name]: !this.state[name] });
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    let keys = Object.keys(this.state);
    keys = keys.filter(key => this.state[key]);
    const params = {};
    keys.forEach(key => {
      params[key] = this.state[key];
    });

    if (!params.email) {
      return this.setState({
        result: "An Email address is required"
      });
    }

    const { email, password } = params;
    const uri = `/email-subscribe?email=${email}`;

    delete params.email;
    delete params.result;
    delete params.password;

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

    if (password) {
      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          this.setState({ result: err.message });
        } else {
          console.log(data);
          this.setState({
            result:
              "Account Created! Check your email to confirm your account. You will be notified when beta testing is live. Follow our social media below for frequent updates or to get in contact!"
          });
        }
      });
    }
  };

  render() {
    return (
      <NavFooter noNav={this.props.noNav}>
        <Head>
          <title>Hytale Data Beta Testing</title>
        </Head>

        <div id="beta-testing-container" className="center">
          <div id="beta-testing">
            <div id="beta-testing-title" className="center">
              Signup for Free Beta Testing
            </div>
            <form onSubmit={this.onSubmit} className="center">
              <div className="center-v">
                <label htmlFor="email">
                  Your Email<span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Required"
                  required
                />
              </div>

              <div className="center-v">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="Optional"
                />
              </div>

              <div id="features-container" className="center-v">
                <label>Which features are you interested in?</label>
                <div id="features" className="center-v">
                  {features.map(feature => {
                    const { id } = feature;

                    return (
                      <span key={id} className="feature">
                        <Checkbox
                          id={id}
                          handler={this.onToggle}
                          checked={this.state[id]}
                        >
                          {feature.name}
                        </Checkbox>

                        <span className="fa fa-question-circle">
                          <span className="center more-info">
                            Checking this box will help us prioritize the
                            features you want.
                            <SmartLink
                              link={`/planned-solutions?s=${id}`}
                              newTab
                            >
                              Learn More about this Feature
                            </SmartLink>
                          </span>
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>

              <div id="project-type" className="center-v">
                <label>What are you making in Hytale?</label>

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
                    checked={this.state.projectOther}
                  >
                    Other
                  </Checkbox>
                  <input
                    id="projectOtherDescription"
                    name="projectOtherDescription"
                    value={this.state.projectOtherDescription}
                    onChange={this.onChange}
                    placeholder="Description (Optional)"
                  />
                </div>
              </div>

              <div className="center">
                <span id="legal-agree">
                  <Recaptcha action="beta_signup" />
                  By signing up you agree to the Hytale Data{" "}
                  <SmartLink display="terms of service" /> and{" "}
                  <SmartLink display="privacy policy" />.
                </span>
                <button type="submit" className="submit-button">
                  {this.state.password
                    ? "CREATE ACCOUNT & BETA SIGNUP"
                    : "BETA SIGNUP"}
                </button>

                <div id="email-sub-result" className="center">
                  {this.state.result}
                </div>
              </div>
            </form>
          </div>
        </div>
      </NavFooter>
    );
  }
}
