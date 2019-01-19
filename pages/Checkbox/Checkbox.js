import { Component } from "react";
import "./Checkbox.css";

export default class Checkbox extends Component {
  render() {
    const handler = this.props.handler || null;
    const classes = this.props.classes
      ? this.props.classes + " checkbox"
      : "checkbox";

    return (
      <div id={this.props.cbId} className="checkbox" title={this.props.title}>
        <input
          type="checkbox"
          id={this.props.id}
          name={this.props.id}
          className={classes}
          onChange={handler}
          checked={this.props.checked}
        />

        <label htmlFor={this.props.id}>{this.props.children}</label>
      </div>
    );
  }
}
