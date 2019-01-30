import SmartLink from "../SmartLink";
import "./SocialMedia.css";

export default class SocialMedia extends React.Component {
  platforms = ["discord", "twitter", "instagram", "youtube", "facebook"];

  render() {
    const { only, classes, source } = this.props;

    return (
      <ul className={`center social-media ${classes || ""}`}>
        {this.platforms.map(platform => {
          if (only && platform !== only) {
            return;
          }

          return (
            <li key={platform}>
              <SmartLink link={`sm/${platform}?s=${source}`} newTab>
                <i className={`fab fa-${platform}`} />
              </SmartLink>
            </li>
          );
        })}
      </ul>
    );
  }
}
