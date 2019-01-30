import NavFooter from "../NavFooter";
import BetaTestingComponent from "./BetaTestingComponent";

export default class BetaTesting extends React.Component {
  render() {
    return (
      <NavFooter noNav={this.props.noNav}>
        <BetaTestingComponent />
      </NavFooter>
    );
  }
}
