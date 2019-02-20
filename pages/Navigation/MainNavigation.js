import SmartLink from "../SmartLink";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./MainNavigation.css";

export default class MainNavigation extends React.Component {
  state = {
    dropDownClass: "",
    width: 0
  };

  navigation = [
    {
      display: "HOME",
      link: ""
    },
    {
      display: "PRODUCTS",
      link: "planned-solutions",
      dropDown: [
        {
          display: "Planned Solutions",
          link: "planned-solutions"
        },
        {
          display: "Minecraft Java Health",
          link: "minecraft-java-health"
        }
      ]
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

  componentDidMount() {
    if (window) {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }

  updateWindowDimensions = () => {
    if (window) {
      const width = window.innerWidth;
      this.setState({ width });
    }
  };

  onDropDownClick = () => {
    this.setState({
      dropDownClass: this.state.dropDownClass ? "" : "close"
    });
  };

  onMenuDropDownToggle = target => {
    if (this.state.width >= 930) {
      return;
    }

    target = `${target}-clicked`;
    this.setState({ [target]: !this.state[target], [`${target}-down`]: false });
  };

  onMouseEnter = target => {
    if (this.state.width < 930) {
      return;
    }

    target = `${target}-down`;
    this.setState({
      [target]: !this.state[target]
    });
  };

  onMouseLeave = target => {
    if (this.state.width < 930) {
      return;
    }

    target = `${target}-down`;
    this.setState({
      [target]: !this.state[target]
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
                {item.dropDown && item.dropDown.length > 0 ? (
                  <div
                    className="nav-menu-drop-down-control"
                    onClick={this.onMenuDropDownToggle.bind(this, item.display)}
                    onMouseEnter={this.onMouseEnter.bind(this, item.display)}
                    onMouseLeave={this.onMouseLeave.bind(this, item.display)}
                  >
                    {item.display}
                    <ul
                      className={`nav-menu-drop-down ${
                        this.state[`${item.display}-clicked`] ||
                        this.state[`${item.display}-down`]
                          ? "menu-down"
                          : "menu-up"
                      }`}
                    >
                      {item.dropDown.map(menuItem => (
                        <li key={menuItem.link}>
                          <SmartLink
                            display={menuItem.display}
                            link={menuItem.link}
                            newTab={menuItem.newTab === true}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <SmartLink
                    display={item.display}
                    link={item.link}
                    newTab={item.newTab === true}
                  />
                )}
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
