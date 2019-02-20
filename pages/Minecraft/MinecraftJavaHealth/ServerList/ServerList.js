import Spinner from "../../../Spinner/Spinner";
import Server from "./Server/Server";
import "./ServerList.css";

export default class ServerList extends React.Component {
  constructor(props) {
    super(props);

    this.startingIndex = 0;

    this.state = {
      data: [],
      servers: [],
      loaded: false
    };
  }

  componentDidMount() {
    this.loadInitialServers();
  }

  loadInitialServers = async () => {
    for (let a = 0; a < 2; ++a, this.startingIndex += 10) {
      await this.renderServers();
    }

    this.setState({ loaded: true }, this.props.onLoaded);
  };

  renderServers = async () => {
    const uri = `https://api.hytaledata.com/dev/minecraft/servers?start=${
      this.startingIndex
    }`;

    console.log(this.startingIndex);

    await fetch(uri)
      .then(data => data.json())
      .then(servers => {
        this.setState({
          servers: [
            ...this.state.servers,
            ...servers.map(server => ({
              ...server,
              favicon: server.favicon
                ? server.favicon.replace(/\\u003d/g, "=")
                : ""
            }))
          ]
        });
      });
  };

  loadMore = () => {
    this.setState(
      {
        loaded: false
      },
      async () => {
        for (let a = 0; a < 2; ++a) {
          await this.renderServers();
          this.startingIndex += 10;
        }
        this.setState({
          loaded: true
        });
      }
    );
  };

  render() {
    let counter = 1;
    const { servers, loaded } = this.state;

    return (
      <div id="servers-container">
        <div id="servers">
          {servers.map(server => {
            const today = new Date();
            let diff =
              (today.getTime() - new Date(server.timestamp).getTime()) / 1000;
            diff /= 60;
            const minutes = Math.abs(Math.round(diff));

            let version = server.version;
            if (version) {
              version = version.replace(/.0/g, ".");
              if (version.indexOf("undefined") >= 0) {
                version = null;
              }
            }

            const { favicon, name, region, players, record } = server;

            return (
              <Server
                key={server.ip}
                counter={counter++}
                ip={server.ip}
                favicon={favicon}
                name={name}
                version={version}
                region={region}
                players={players}
                record={record}
                minutes={minutes}
              />
            );
          })}
        </div>

        {!loaded && servers.length > 0 && (
          <div id="server-spinner-container" className="center">
            <Spinner display={true} />
          </div>
        )}

        {servers.length > 0 && (
          <div id="load-more-container">
            <button onClick={this.loadMore}>Load More Servers</button>
          </div>
        )}
      </div>
    );
  }
}
