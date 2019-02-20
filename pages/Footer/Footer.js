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
          <SmartLink id="footer-home" link="">
            <img
              src="https://cdn.hytaledata.com/logo-slim-black.png"
              alt="Hytale Data Logo"
            />
            HYTALE DATA
          </SmartLink>

          <ul>
            <li className="footer-title">PRODUCTS</li>
            <li>
              <SmartLink display="Planned Solutions" />
            </li>
            <li>
              <SmartLink display="Minecraft Java Health" />
            </li>
          </ul>

          <ul>
            <li className="footer-title">COMPANY</li>
            <li>
              <SmartLink display="Contact" />
            </li>
          </ul>

          <ul>
            <li className="footer-title">LEGAL</li>
            <li>
              <SmartLink
                display="Terms of Service"
                link="legal#terms-of-service"
              />
            </li>

            <li>
              <SmartLink display="Privacy Policy" link="legal#privacy-policy" />
            </li>

            <li>
              <SmartLink display="Refund Policy" link="legal#refund-policy" />
            </li>
          </ul>

          <div id="footer-social-media">
            <div className="footer-title">SOCIAL</div>
            <SocialMedia source="footer" />
          </div>
        </div>

        <div id="copyright">
          <span>&copy; {this.getDate()} Hytale Data.</span>{" "}
          <span>
            Not affiliated with{" "}
            <SmartLink display="Hytale" link="//hytale.com" newTab /> or{" "}
            <SmartLink
              display="Hypixel Studios"
              link="//hypixelstudios.com"
              newTab
            />
            . Hytale and Hytale images are trademarked property of Hypixel
            Studios.
          </span>
        </div>
      </footer>
    );
  }
}
