import SmartLink from "../SmartLink";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./MainNavigation.css";

export default class MainNavigation extends React.Component {
  state = {
    dropDownClass: ""
  };

  navigation = [
    {
      display: "HOME",
      link: ""
    },
    {
      display: "SOLUTIONS",
      link: "planned-solutions"
    },
    {
      display: "BLOG",
      link: "//blog.hytaledata.com/",
      newTab: true
    },
    {
      display: "BETA TESTING",
      link: "beta-testing"
    }
  ];

  onDropDownClick = () => {
    this.setState({
      dropDownClass: this.state.dropDownClass ? "" : "close"
    });
  };

  render() {
    const { dropDownClass } = this.state;

    return (
      <nav className="center-v">
        <div id="nav" className="center-v">
          <SmartLink id="nav-home" className="center" link="">
            <img
              src="https://cdn.hytaledata.com/logo-slim-black.png"
              alt="Hytale Data Logo"
            />
            HYTALE DATA
          </SmartLink>

          <ul id="nav-links" className={`center ${dropDownClass}`}>
            {this.navigation.map(item => (
              <li key={item.display}>
                <SmartLink
                  display={item.display}
                  link={item.link}
                  newTab={item.newTab === true}
                />
              </li>
            ))}
            <li className="center">
              <SocialMedia
                source="drop-down-navigation"
                classes="nav-mobile-social-media"
              />
            </li>
          </ul>

          <SocialMedia source="navigation" classes="nav-main-social-media" />

          <div
            id="drop-down"
            className={dropDownClass}
            onClick={this.onDropDownClick}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
    );
  }
}
