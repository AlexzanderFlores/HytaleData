import NavFooter from "../NavFooter";
import BetaTestingComponent from "./BetaTestingComponent";
import About from "../About/About";

export default class BetaTesting extends React.Component {
  render() {
    return (
      <NavFooter noNav={this.props.noNav}>
        <About />
        <BetaTestingComponent />
      </NavFooter>
    );
  }
}
