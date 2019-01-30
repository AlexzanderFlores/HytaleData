import { Component } from "react";
import ScrollToTop from "./ScrollToTop";

export default class SmartLink extends Component {
  render() {
    let {
      display,
      link = display.toLowerCase().replace(/ /g, "-"),
      newTab = false,
      id = "",
      className = "",
      underline,
      style = {}
    } = this.props;

    if (!link.startsWith("/")) {
      link = `https://hytaledata.com/${link}`;
    }

    if (underline) {
      style.textDecoration = "underline";
    }

    return (
      <a
        href={link}
        onClick={event => {
          if (window) {
            const target = window.location.pathname.toLowerCase();
            if (link === target) {
              event.preventDefault();
              ScrollToTop();
            }
          }
        }}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
        id={id}
        className={className}
        style={style}
        target="_parent"
      >
        {display || this.props.children}
      </a>
    );
  }
}
