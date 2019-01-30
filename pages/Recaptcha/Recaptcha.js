import SmartLink from "../SmartLink";
import "./Recaptcha.css";

export default class Recaptcha extends React.Component {
  siteKey = "6Ld31IkUAAAAAN--L8Z5eYfuQ3vjUZI4DgqSR0dY";

  componentDidMount() {
    this.initRecaptcha();
  }

  initRecaptcha = () => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(this.siteKey, { action: this.props.action })
          .then(response => fetch(`/recaptcha?response=${response}`));
      });
    } else {
      console.log("Recaptcha failed to load, trying again...");
      setTimeout(this.initRecaptcha, 2500);
    }
  };

  render() {
    return (
      <div className="recaptcha-disclaimer">
        <span>This site is protected by reCAPTCHA and the Google</span>
        <SmartLink
          display="Privacy Policy"
          link="//policies.google.com/privacy"
          newTab
        />
        <span>and</span>
        <SmartLink
          display="Terms of Service"
          link="//policies.google.com/terms"
          newTab
        />
        <span>apply.</span>
      </div>
    );
  }
}
