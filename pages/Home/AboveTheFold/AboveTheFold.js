import { Line } from "react-chartjs-2";
import "./AboveTheFold.css";

export default class AboveTheFold extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {}
    };
  }

  componentDidMount() {
    setTimeout(this.setNewData, 500);
  }

  getRandomData = () => {
    const data = [];
    for(let a = 0; a < 4; ++a) {
      data.push(Math.floor(Math.random() * 400) + 300);
    }
    return data;
  }

  setNewData = () => {
    this.setState({
      chartData: {
        labels: ["April 21st", "April 22nd", "April 23rd", "April 24th"],
        datasets: [
          {
            label: "Revenue",
            data: this.getRandomData(),
            fill: false,
            borderColor: "#fa9d1c",
            backgroundColor: "#fa9d1c"
          },
          {
            label: "Average Player Count",
            data: this.getRandomData(),
            fill: false,
            borderColor: "#018acf",
            backgroundColor: "#018acf"
          },
          {
            label: "New Players Joined",
            data: this.getRandomData(),
            fill: false,
            borderColor: '#ee4130',
            backgroundColor: '#ee4130'
          }
        ]
      }
    }, () => setTimeout(this.setNewData, 5000));
  };

  render() {
    return (
      <div id="above-the-fold" className="center">
        <div id='intro-text' className="center-v">
          <h1>Hytale Server Analytics</h1>
          <h2>The tools &amp; metrics you need to grow your Hytale server.</h2>
        </div>

        <div id="chart" className="center">
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
                      beginAtZero: true
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    );
  }
}
