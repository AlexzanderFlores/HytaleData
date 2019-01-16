import { Line } from "react-chartjs-2";
import SmartLink from "../../SmartLink";
import "./AboveTheFold.css";

export default class AboveTheFold extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {}
    };
  }
  amount = 6;
  index = [0, this.amount / 3, (this.amount / 3) * 2];
  labels = [];
  borderWidth = 7;

  componentDidMount() {
    for (let a = 0; a < this.amount; ++a) {
      this.labels.push("");
    }

    this.setNewData();
  }

  setNewData = () => {
    this.setState(
      {
        chartData: {
          labels: this.labels,
          datasets: [
            {
              label: "0",
              data: this.getRandomData(0),
              fill: false,
              borderWidth: this.borderWidth,
              borderColor: "#fa9d1c"
            },
            {
              label: "1",
              data: this.getRandomData(1),
              fill: false,
              borderWidth: this.borderWidth,
              borderColor: "#018acf"
            },
            {
              label: "2",
              data: this.getRandomData(2),
              fill: false,
              borderWidth: this.borderWidth,
              borderColor: "#ee4130"
            }
          ]
        }
      },
      () => setTimeout(this.setNewData, 150)
    );
  };

  getRandomData = set => {
    const data = [];
    let index = this.index[set];
    for (let a = 0; a < this.amount; ++a) {
      let value = 1;
      if (a === index) {
        value = 5;
      } else if (a === index - 1 || a === index + 1) {
        value = 3;
      }
      data.push(value);
    }
    if (++index >= this.amount) {
      index = 0;
    }
    this.index[set] = index;
    return data;
  };

  viewPlanned = () => {
    console.log("viewPlanned");
  };

  request = () => {
    console.log("request");
  };

  render() {
    return (
      <div id="above-the-fold-container" className="center">
        <div id="above-the-fold" className="center-v">
          <div id="chart" className="center-v">
            <Line
              data={this.state.chartData}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                  display: false
                },
                tooltips: {
                  enabled: false
                },
                elements: {
                  point: {
                    radius: 0
                  }
                },
                animation: {
                  ease: "easeInOutBounce"
                },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                        drawBorder: false
                      },
                      ticks: {
                        display: false
                      }
                    }
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        display: false,
                        drawBorder: false
                      },
                      ticks: {
                        display: false
                      }
                    }
                  ]
                }
              }}
            />
          </div>

          <div id="gradient" />

          <div id="intro-text" className="center">
            <h1>Hytale Server Analytics</h1>
            <h2>
              The tools &amp; metrics you need to grow your Hytale server.
            </h2>
            <div id="cta-container">
              <SmartLink link="/planned-solutions">
                <button onClick={this.viewPlanned}>PLANNED SOLUTIONS</button>
              </SmartLink>
              <SmartLink link="/request-solution">
                <button onClick={this.request}>REQUEST SOLUTION</button>
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
