import Head from "next/head";
import NavFooter from "../NavFooter";
import Solution from "./Solution/Solution";
import features from "../Features";
import "./PlannedSolutions.css";

export default class PlannedSolutions extends React.Component {
  render() {
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

            <div id="solution-list">
              {features.map(solution => (
                <Solution key={solution.id} {...solution} />
              ))}
            </div>
          </div>
        </div>
      </NavFooter>
    );
  }
}
