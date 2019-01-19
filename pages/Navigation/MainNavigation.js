import SmartLink from "../SmartLink";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./MainNavigation.css";

export default class MainNavigation extends React.Component {
  state = {
    style: {}
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style: {
          opacity: 1
        }
      });
    }, 750);
  }

  render() {
    return (
      <nav className="center-v">
        <div id="nav" className="center-v">
          <SmartLink id="nav-home" className="center" link="/">
            <img
              src="https://cdn.hytaledata.com/logo-slim-black.png"
              alt="Hytale Data Logo"
            />
            Hytale Data
          </SmartLink>

          <SmartLink id="beta-testing-button" link="/beta-testing">
            <button style={this.state.style}>FREE BETA TESTING</button>
          </SmartLink>

          <SocialMedia source="navigation" classes="nav-main-social-media" />
        </div>
      </nav>
    );
  }
}
