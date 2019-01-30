import SocialMedia from "../../SocialMedia/SocialMedia";
import "./Solution.css";

export default class Solution extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  componentDidMount() {
    try {
      const query = window.location.search;
      const values = new URLSearchParams(query);
      const solution = values.get("s");

      if (solution && solution === this.props.id) {
        const element = document.getElementById(`solution-${solution}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        this.toggleSelected(() => setTimeout(this.toggleSelected, 1000));
      }
    } catch (error) {
      console.error(error);
    }
  }

  toggleSelected = callback =>
    this.setState({ selected: !this.state.selected }, callback);

  render() {
    const { selected } = this.state;
    const { id, name, description } = this.props;

    return (
      <div
        id={`solution-${id}`}
        className="solution"
        style={selected ? { border: "2px solid #ee4130" } : {}}
      >
        <div className="solution-data center-h">
          <div className="center solution-name">{name}</div>

          <div className="center-h solution-description">{description}</div>

          <div className="solution-social-media">
            Questions? <SocialMedia only="discord" source={`solutions-${id}`} />
          </div>
        </div>
      </div>
    );
  }
}
