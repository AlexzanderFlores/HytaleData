import { Bar } from "react-chartjs-2";
import LearnMore from "../LearnMore/LearnMore";

export default class IncomeStats extends React.Component {
  state = {
    A: [],
    B: []
  };

  componentDidMount() {
    this.setNewData();
  }

  setNewData = () => {
    this.setState(
      {
        A: this.getRandomData(4, 100, 1000),
        B: this.getRandomData(4, 100, 1000)
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
        <div id="ab-testing" className="center planned-solution">
          <div className="planned-solution-information">
            <h2>A/B Testing</h2>
            <div>
              Test out different wordings and colors on alerts, MOTDs, and more
              with A/B testing. Provide multiple messages to split test and see
              how players react to them. Use this to continuously optimize the
              amount of players clicking on Voting or Shop links.
            </div>
            <LearnMore solution="ab-testing" />
          </div>

          <div className="center planned-solution-graphs">
            <Bar
              data={{
                labels: ["April 21st", "April 22nd", "April 23rd"],
                datasets: [
                  {
                    label: "Vote Alert A",
                    data: this.state.A,
                    borderColor: "#018acf",
                    backgroundColor: "#018acf"
                  },
                  {
                    label: "Vote Alert B",
                    data: this.state.B,
                    borderColor: "#ee4130",
                    backgroundColor: "#ee4130"
                  }
                ]
              }}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                  position: "bottom"
                },
                tooltips: {
                  mode: "index",
                  intersect: false
                },
                hover: {
                  mode: "nearest",
                  intersect: true
                },
                scales: {
                  yAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: "Website Clicks",
                        fontSize: 16
                      },
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
