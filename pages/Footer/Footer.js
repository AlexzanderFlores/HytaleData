import SmartLink from "../SmartLink";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css";

export default class Footer extends React.Component {
  getDate = () => {
    const year = new Date().getFullYear();
    if (year !== 2019) {
      return `2019 - ${year}`;
    }
    return year;
  };

  render() {
    return (
      <footer className="center">
        <div id="footer" className="center">
          <SmartLink id="footer-home" link="/">
            <img
              src="https://cdn.hytaledata.com/logo-slim-black.png"
              alt="Hytale Data Logo"
            />
            Hytale Data
          </SmartLink>

          {/* <ul>
            <li className="footer-title">SOLUTIONS</li>
            <li>
              <SmartLink display="Analytics" />
            </li>

            <li>
              <SmartLink display="Payment Gateway" />
            </li>

            <li>
              <SmartLink display="Plugins" />
            </li>

            <li>
              <SmartLink display="APIs" />
            </li>
          </ul>

          <ul id="footer-company">
            <li className="footer-title">COMPANY</li>
            <li>
              <SmartLink display="Affiliate Program" />
            </li>

            <li>
              <SmartLink display="Contact Us" />
            </li>
          </ul>

          <ul>
            <li className="footer-title">LEGAL</li>
            <li>
              <SmartLink display="Terms of Service" />
            </li>

            <li>
              <SmartLink display="Privacy Policy" />
            </li>

            <li>
              <SmartLink display="Refund Policy" />
            </li>
          </ul> */}

          <div id="footer-social-media">
            <div className="footer-title">SOCIAL</div>
            <SocialMedia />
          </div>
        </div>

        <div id="copyright">
          <span>&copy; {this.getDate()} Alexzander Flores.</span>{" "}
          <span>
            Not affiliated with{" "}
            <SmartLink display="Hytale" link="//hytale.com" newTab={true} /> or{" "}
            <SmartLink
              display="Hypixel Studios"
              link="//hypixelstudios.com"
              newTab={true}
            />
            .
          </span>
        </div>
      </footer>
    );
  }
}
