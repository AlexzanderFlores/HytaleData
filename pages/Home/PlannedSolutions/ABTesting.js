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
      () => setTimeout(this.setNewData, 5000)
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
      <div
        id="ab-testing-container"
        className="center planned-solution-container"
      >
        <div id="ab-testing" className="center planned-solution">
          <div className="planned-solution-information">
            <h2>A/B Testing</h2>
            <div>
              Test out different wordings and colors on alerts, MOTDs, and more
              with A/B testing. Provide multiple messages to split test and see
              how players react to them. Use this to continuously optimize the
              amount of clicks on your Shop link.
            </div>
            <LearnMore solution="a-b-testing" />
          </div>

          <div className="center planned-solution-graphs">
            <Bar
              data={{
                labels: ["April 21st", "April 22nd", "April 23rd"],
                datasets: [
                  {
                    label: "Sale Alert A",
                    data: this.state.A,
                    borderColor: "#018acf",
                    backgroundColor: "#018acf"
                  },
                  {
                    label: "Sale Alert B",
                    data: this.state.B,
                    borderColor: "#ee4130",
                    backgroundColor: "#ee4130"
                  }
                ]
              }}
              options={{
                maintainAspectRatio: false,
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
                        labelString: "Shop Clicks",
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
