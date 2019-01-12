import SmartLink from "../SmartLink";
import "./SocialMedia.css";

export default class SocialMedia extends React.Component {
  platforms = [
    { name: "discord", url: "//discord.gg/UGADfhu" },
    { name: "twitter" },
    { name: "instagram" },
    {
      name: "youtube",
      url: "//www.youtube.com/channel/UCDedgLAW1v4AYMllKUKzw2w"
    }
  ];

  render() {
    return (
      <ul className={`center social-media ${this.props.classes || ""}`}>
        {this.platforms.map(platform => (
          <li key={platform.name}>
            <SmartLink
              link={platform.url || `//${platform.name}.com/HytaleData`}
              newTab={true}
            >
              <i className={`fab fa-${platform.name}`} />
            </SmartLink>
          </li>
        ))}
      </ul>
    );
  }
}
