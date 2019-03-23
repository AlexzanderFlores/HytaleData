import { Line } from "react-chartjs-2";
import Spinner from "../../../Spinner/Spinner";
import "./ServerStats.css";

export default class ServerStats extends React.Component {
  state = {
    loaded: false,
    timestamps: [],
    hourDistance: [],
    totalPlayers: [],
    currentPlayers: 0,
    totalServers: 0,
    recordPlayers: 0,
    recordTimestamp: new Date()
  };

  componentDidMount() {
    fetch("https://api.hytaledata.com/dev/minecraft/stats")
      .then(data => data.json())
      .then(stats => {
        const recordPlayers = stats.recordPlayers;
        const recordTimestamp = new Date("2019-02-17T18:00:00.685Z");
        stats = stats.totalPlayers;

        const timestamps = [];
        const hourDistance = [];
        const totalPlayers = [];
        let currentPlayers = -1;
        let totalServers = -1;

        const keys = Object.keys(stats).splice(0, 24);
        const today = new Date();

        for (let a = keys.length - 1; a >= 0; --a) {
          const date = new Date(stats[keys[a]].timestamp);
          timestamps.push(date.toLocaleString());
          const hours = Math.floor((today - date) / 3600000);
          hourDistance.push(`${hours}h ago`);
          const total = stats[keys[a]].totalPlayers;
          totalPlayers.push(total);
          currentPlayers = total;
          totalServers = stats[keys[a]].totalServers;
        }

        this.setState({
          loaded: true,
          timestamps,
          hourDistance,
          totalPlayers,
          currentPlayers,
          totalServers,
          recordPlayers,
          recordTimestamp
        });
      })
      .catch(console.error);
  }

  getOrdinal = n => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  render() {
    const {
      loaded,
      timestamps,
      hourDistance,
      totalPlayers,
      currentPlayers,
      totalServers,
      recordPlayers,
      recordTimestamp
    } = this.state;

    return (
      <div id="minecraft-stats-container">
        <div id="minecraft-stats">
          {loaded ? (
            <>
              <div id="minecraft-stats-controls">
                <div id="minecraft-stats-global">
                  Tracking {totalServers} servers with a total of{" "}
                  {currentPlayers.toLocaleString()} players.
                  <br />
                  Record player count:{" "}
                  <span
                    id="record-player-count"
                    title={recordTimestamp.toLocaleString()}
                  >
                    {recordPlayers.toLocaleString()}.
                  </span>
                </div>
              </div>

              <div id="minecraft-stats-chart">
                <Line
                  data={{
                    labels: hourDistance,
                    datasets: [
                      {
                        label: "Players",
                        data: totalPlayers,
                        fill: false,
                        borderColor: "#018acf",
                        backgroundColor: "#018acf"
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
                      intersect: false,
                      callbacks: {
                        label: tooltipItems => [
                          `${tooltipItems.yLabel.toLocaleString()} players`,
                          timestamps[tooltipItems.index]
                        ]
                      }
                    },
                    hover: {
                      mode: "nearest",
                      intersect: true
                    },
                    height: "100%",
                    scales: {
                      yAxes: [
                        {
                          scaleLabel: {
                            display: true,
                            labelString: "Player Count",
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
            </>
          ) : (
            <div id="server-stats-spinner-container" className="center">
              <Spinner display={true} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
