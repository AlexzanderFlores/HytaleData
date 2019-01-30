import Head from "next/head";
import NavFooter from "../NavFooter";
import Solution from "./Solution/Solution";
import features from "../Features";
import "./PlannedSolutions.css";

export default class PlannedSolutions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      features: []
    };
  }

  componentDidMount() {
    this.setState({
      features: features.map(solution => {
        if (solution) {
          return <Solution key={solution.id} {...solution} />;
        }
        return <></>;
      })
    });
  }

  render() {
    if (this.state.features.length === 0) {
      return <></>;
    }

    return (
      <NavFooter>
        <Head>
          <title>Hytale Data - Planned Solutions</title>
        </Head>

        <div id="planned-solutions-container" className="center">
          <div id="planned-solutions" className="center">
            <div id="planned-solutions-title" className="center">
              Planned Solutions
            </div>

            <div id="solution-list">{this.state.features}</div>
          </div>
        </div>
      </NavFooter>
    );
  }
}
