import { Line } from "react-chartjs-2";
import "./AboveTheFold.css";

export default class AboveTheFold extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      chart: <></>
    };
  }

  componentDidMount() {
    this.setState(
      {
        chart: (
          <Line
            data={this.state.chartData}
            options={{
              maintainAspectRatio: true,
              responsive: true,
              title: {
                text: "Hytale Server Analytics"
              },
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
                    ticks: {
                      beginAtZero: !this.state.chartData.labels
                    }
                  }
                ]
              }
            }}
          />
        )
      },
      () => {
        setTimeout(() => {
          this.setState({
            chartData: {
              labels: ["21st", "22nd", "23rd", "24th"],
              datasets: [
                {
                  label: "Revenue",
                  data: [512, 702, 527, 805],
                  fill: false,
                  borderColor: "lightgreen",
                  backgroundColor: "lightgreen"
                },
                {
                  label: "Average Player Count",
                  data: [478, 518, 705, 714],
                  fill: false,
                  borderColor: "lightblue",
                  backgroundColor: "lightblue"
                }
              ]
            }
          });
        }, 500);
      }
    );
  }

  render() {
    return (
      <div id="above-the-fold" className="center">
        <div className="center">
          <h1>Hytale Server Analytics</h1>
          <p>Grow and maintain your Hytale server with powerful analytics.</p>
        </div>
        <div id="chart" className="center">
          {this.state.chart}
        </div>
      </div>
    );
  }
}
