import SmartLink from "../../SmartLink";
import "./LearnMore.css";

export default class LearnMore extends React.Component {
  onClick = () => {
    console.log(this.props.solution);
  };

  render() {
    const { solution: s, text } = this.props;
    return (
      <div className="learn-more">
        <SmartLink link={`planned-solutions${s ? `?s=${s}` : ""}`} newTab>
          <button>{text || "LEARN MORE"}</button>
        </SmartLink>
      </div>
    );
  }
}
