import { Pie } from "react-chartjs-2";
import SmartLink from "../../SmartLink";
import LearnMore from "../LearnMore/LearnMore";

export default class GameStats extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setNewData();
  }

  setNewData = () => {
    this.setState(
      {
        data: this.getRandomData(3, 2500, 7500)
      },
      () => setTimeout(this.setNewData, 10000)
    );
  };

  getRandomData = (number, min, max) => {
    const data = [];
    for (let a = 0; a < number; ++a) {
      data.push(Math.floor(Math.random() * max) + min);
    }
    return data;
  };

  render() {
    return (
      <div className="center planned-solution-container">
        <div id="game-stats" className="center planned-solution">
          <div className="center planned-solution-graphs">
            <Pie
              data={{
                labels: ["Archer", "Knight", "Mage"],
                datasets: [
                  {
                    data: this.state.data,
                    backgroundColor: ["#fa9d1c", "#018acf", "#ee4130"]
                  }
                ]
              }}
              options={{
                maintainAspectRatio: false,
                legend: {
                  position: "bottom"
                }
              }}
              height={275}
            />
          </div>

          <div className="planned-solution-information">
            <h2>Game Statistics</h2>
            <div>
              Better understand what your players like by tracking{" "}
              <strong>map votes</strong>, <strong>kits selected</strong>,{" "}
              <strong>map ratings</strong>, and more. Use this data to create
              new content you know your players will love.
              <br />
              <br />
              Have a complex game with a lot of data points? Our powerful{" "}
              <SmartLink display="API" newTab={true} /> lets you control what
              data you collect and display in your dashboard.
            </div>
            <LearnMore solution="game-statistics" />
          </div>
        </div>
      </div>
    );
  }
}
