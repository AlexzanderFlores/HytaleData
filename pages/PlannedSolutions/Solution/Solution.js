import SocialMedia from "../../SocialMedia/SocialMedia";
import "./Solution.css";

export default class Solution extends React.Component {
  render() {
    const {
      id,
      name,
      description,
      ratings = { up: 0, down: 0 },
      request
    } = this.props;

    return (
      <div id={`solution-${id}`} className="solution">
        <div className="solution-data center-h">
          <div className="center solution-name">{name}</div>

          <div className="center-h solution-description">{description}</div>

          {request ? (
            <></>
          ) : (
            <>
              <div className="solution-social-media">
                Questions? <SocialMedia only="discord" />
              </div>

              <div className="solution-rating">
                <div className="solution-rating-up">
                  <i className="far fa-thumbs-up" />
                  {ratings.up}
                </div>
                <div className="solution-rating-down">
                  <i className="far fa-thumbs-down" />
                  {ratings.down}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
