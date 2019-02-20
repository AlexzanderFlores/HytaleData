import "./Server.css";

export default class Server extends React.Component {
  render() {
    const {
      counter,
      ip,
      favicon,
      name,
      version,
      region,
      players,
      record,
      minutes
    } = this.props;

    return (
      <div className="server" title={ip}>
        <img className="server-favicon" src={favicon} />
        <div className="server-name">
          {counter !== undefined && <>#{counter}</>} {name}
          <br />{" "}
          <div className="server-region-version">
            <span className={version ? "server-version" : ""}>{version}</span>
            {region && (
              <span
                className={`flag-icon flag-icon-${region}`}
                title={`Servers are hosted in ${region.toUpperCase()}`}
              />
            )}
          </div>
        </div>
        <div className="server-players">
          <div>Players: {players.toLocaleString()}</div>
          {record && <div>Record: {record.toLocaleString()}</div>}
        </div>
        {minutes !== undefined && <div>Updated {minutes}m ago</div>}
      </div>
    );
  }
}
