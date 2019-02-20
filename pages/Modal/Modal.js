import "./Modal.css";

export default class Modal extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "visible";
  }

  render() {
    return (
      <div className="modal-container center">
        <div className="modal center">
          <div className="modal-close" onClick={this.props.onClose}>
            X
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
