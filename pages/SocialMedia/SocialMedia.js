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
    const { only, classes } = this.props;

    return (
      <ul className={`center social-media ${classes || ""}`}>
        {this.platforms.map(platform => {
          if (only && platform.name !== only) {
            return;
          }

          return (
            <li key={platform.name}>
              <SmartLink
                link={platform.url || `//${platform.name}.com/HytaleData`}
                newTab={true}
              >
                <i className={`fab fa-${platform.name}`} />
              </SmartLink>
            </li>
          );
        })}
      </ul>
    );
  }
}
