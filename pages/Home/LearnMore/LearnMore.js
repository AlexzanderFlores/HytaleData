import SmartLink from "../../SmartLink";
import "./LearnMore.css";

export default class LearnMore extends React.Component {
  onClick = () => {
    console.log(this.props.solution);
  };

  render() {
    return (
      <div className="learn-more">
        <SmartLink link={`/planned-solutions?s=${this.props.solution}`} newTab>
          <button>LEARN MORE</button>
        </SmartLink>
      </div>
    );
  }
}
