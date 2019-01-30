import SmartLink from "../../SmartLink";
import "./AboveTheFold.css";

export default () => (
  <div id="above-the-fold-container" className="center">
    <div id="above-the-fold" className="center-v">
      <div id="intro-text" className="center">
        <h1>Hytale Server Analytics</h1>
        <h2>The tools &amp; metrics you need to grow your Hytale server.</h2>
        <div id="cta-container">
          <SmartLink link="planned-solutions">
            <button>PLANNED SOLUTIONS</button>
          </SmartLink>
          <SmartLink link="sm/discord?s=header" newTab>
            <button>DISCORD SERVER</button>
          </SmartLink>
        </div>
      </div>
    </div>
  </div>
);
