import SmartLink from "../SmartLink";
import "./Recaptcha.css";

export default class Recaptcha extends React.Component {
  siteKey = "6Ld31IkUAAAAAN--L8Z5eYfuQ3vjUZI4DgqSR0dY";

  componentDidMount() {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(this.siteKey, { action: this.props.action })
        .then(response => fetch(`/recaptcha?response=${response}`));
    });
  }

  render() {
    return (
      <div className="recaptcha-disclaimer">
        <span>This site is protected by reCAPTCHA and the Google</span>
        <SmartLink
          display="Privacy Policy"
          link="https://policies.google.com/privacy"
          newTab
        />
        <span>and</span>
        <SmartLink
          display="Terms of Service"
          link="https://policies.google.com/terms"
          newTab
        />
        <span>apply.</span>
      </div>
    );
  }
}
