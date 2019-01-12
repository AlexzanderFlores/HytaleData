import SmartLink from "../SmartLink";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./MainNavigation.css";

export default class MainNavigation extends React.Component {
  state = {
    dropDownClass: ""
  };

  navigation = ["Solutions", "Pricing", "Login", "Signup"];

  onDropDownClick = () => {
    this.setState({
      dropDownClass: this.state.dropDownClass ? "" : "close"
    });
  };

  render() {
    const { dropDownClass } = this.state;

    return (
      <nav className="center-v">
        <SmartLink id="nav-home" className="center" link="/">
          <img
            src="https://cdn.hytaledata.com/logo.png"
            alt="Hytale Data Logo"
          />
          Hytale Data
        </SmartLink>

        <ul id="nav-links" className={`center ${dropDownClass}`}>
          {this.navigation.map(item => (
            <li key={item} className="center">
              <SmartLink link={`/${item.toLowerCase()}`}>{item}</SmartLink>
            </li>
          ))}
          <li className="center">
            <SocialMedia classes="nav-mobile-social-media" />
          </li>
        </ul>

        <SocialMedia classes="nav-main-social-media" />

        <div
          id="drop-down"
          className={dropDownClass}
          onClick={this.onDropDownClick}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
    );
  }
}
