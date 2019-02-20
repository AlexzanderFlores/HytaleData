import Server from "../ServerList/Server/Server";
import Spinner from "../../../Spinner/Spinner";
import "./AddServer.css";

export default class AddServer extends React.Component {
  state = {
    ip: "",
    name: "",
    result: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const { ip, name } = this.state;

    this.setState({
      result: <Spinner display={true} />
    });

    fetch(`/add-server?ip=${ip}&name=${name}`, {
      method: "POST"
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);

        if (data.error) {
          throw new Error("err");
        } else if (data.rateLimit) {
          this.setState({
            result: (
              <strong>
                You can only submit a server once every 2 minutes.
              </strong>
            )
          });
        } else if (data.failedToPing) {
          this.setState({
            result: (
              <strong>Failed to ping server! Are you sure it is online?</strong>
            )
          });
        } else if (data.alreadyExists) {
          this.setState({
            result: <strong>We are already tracking this server.</strong>
          });
        } else {
          const { favicon, version, region, players } = data;

          this.setState({
            result: (
              <>
                <Server
                  ip={this.state.ip}
                  favicon={favicon}
                  name={this.state.name}
                  version={version}
                  region={region}
                  players={players}
                />

                <strong id="added-server">
                  Successfully added server! Data will be collected in less than
                  15 minutes.
                </strong>
              </>
            )
          });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({
          result: <strong>An error occurred, please try again later.</strong>
        });
      });
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      this.props.loaded && (
        <div id="add-server" className="center">
          <form onSubmit={this.onSubmit}>
            <h2>Are we Missing a Server?</h2>

            <div id="add-server-inputs">
              <input
                name="ip"
                placeholder="Server IP"
                value={this.state.ip}
                onChange={this.onChange}
                required
              />

              <input
                name="name"
                placeholder="Server Name"
                value={this.state.name}
                onChange={this.onChange}
                required
              />
            </div>

            <button type="submit">Add Server</button>

            <div id="add-server-result" className="center">
              {this.state.result}
            </div>
          </form>
        </div>
      )
    );
  }
}
