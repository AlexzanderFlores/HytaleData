import { Line } from "react-chartjs-2";
import LearnMore from "../LearnMore/LearnMore";

export default class IncomeStats extends React.Component {
  state = {
    data: [[]]
  };

  componentDidMount() {
    this.setNewData();
  }

  setNewData = () => {
    this.setState(
      {
        data: [this.getRandomData(3, 0.5, 6), this.getRandomData(3, 0.5, 6)]
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
        <div id="income-stats" className="center planned-solution">
          <div className="planned-solution-information">
            <h2>Income Statistics</h2>
            <div>
              Knowing your numbers is the first step to increasing your revenue.
              Income Statistics help track <strong>conversion rate</strong>,{" "}
              <strong>average income per player</strong>, and more.
            </div>
            <LearnMore solution="income-stats" />
          </div>

          <div className="center planned-solution-graphs">
            <Line
              data={{
                labels: ["April", "May", "June"],
                datasets: [
                  {
                    label: "Conversion Rate",
                    data: this.state.data[0],
                    fill: false,
                    borderColor: "#018acf",
                    backgroundColor: "#018acf"
                  },
                  {
                    label: "Churn Rate",
                    data: this.state.data[1],
                    fill: false,
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
                        labelString: "Percentage",
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
