import { Component } from "react";
import "./Checkbox.css";

export default class Checkbox extends Component {
  render() {
    const handler = this.props.handler ? this.props.handler : null;
    const classes = this.props.classes
      ? this.props.classes + " checkbox"
      : "checkbox";

    return (
      <div id={this.props.cbId} className="Checkbox" title={this.props.title}>
        <input
          type="checkbox"
          id={this.props.id}
          name={this.props.id}
          className={classes}
          style={{ display: "none" }}
          onChange={handler}
          checked={this.props.checked}
          display={this.props.children}
        />

        <label htmlFor={this.props.id} className="checkbox-input">
          <span>
            {this.props.svg || (
              <svg width="12px" height="10px" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1" />
              </svg>
            )}
          </span>

          <span className="checkbox-label">{this.props.children}</span>
        </label>
      </div>
    );
  }
}
