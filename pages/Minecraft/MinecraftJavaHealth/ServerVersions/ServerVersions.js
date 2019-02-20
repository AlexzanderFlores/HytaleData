import { Doughnut } from "react-chartjs-2";
import "./ServerVersions.css";

export default class ServerVersions extends React.Component {
  state = {
    labels: [],
    counts: []
  };

  componentDidMount() {
    fetch("https://api.hytaledata.com/dev/minecraft/stats/versions")
      .then(data => data.json())
      .then(data => {
        const labels = [];
        const counts = [];

        Object.keys(data).forEach(key => {
          labels.push(data[key]._id);
          counts.push(data[key].count);
        });

        let total = 0;
        for (let count of counts) {
          total += count;
        }

        this.setState({ labels, counts, total });
      })
      .catch(console.error);
  }

  render() {
    return (
      this.props.loaded &&
      (this.state.labels.length && (
        <div id="versions" className="center">
          <h2>Server Version Stats</h2>
          <strong>Click Key to Toggle Versions</strong>
          <Doughnut
            data={{
              labels: this.state.labels,
              datasets: [
                {
                  data: this.state.counts,
                  backgroundColor: [
                    "#fa9d1c",
                    "#018acf",
                    "#ee4130",
                    "#44AF69",
                    "#CC26DE",
                    "#ff5aa7",
                    "#06AED5",
                    "#BE6E46"
                  ]
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              legend: {
                position: "bottom"
              },
              width: "100%",
              tooltips: {
                callbacks: {
                  label: (tooltipItems, data) => {
                    const { index } = tooltipItems;
                    const servers = this.state.counts[index];

                    return [
                      `Version: ${data.labels[index]}`,
                      `Servers: ${servers} (${(
                        (servers * 100) /
                        this.state.total
                      ).toFixed(2)}%)`
                    ];
                  }
                }
              }
            }}
            height={275}
          />
        </div>
      ))
    );
  }
}
