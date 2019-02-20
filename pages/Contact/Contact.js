import Head from "next/head";
import NavFooter from "../NavFooter";
import Recaptcha from "../Recaptcha/Recaptcha";
import "./Contact.css";

export default class Contact extends React.Component {
  state = {
    email: "",
    subject: "",
    message: "",
    result: ""
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const form = { ...this.state };
    form.subject = encodeURI(form.subject);
    form.message = encodeURI(form.message);

    fetch("/send-email", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(data => {
        let result = "";
        if (data.secure === false) {
          result = "Invalid Capcha.";
        } else if (data.rateLimit) {
          result = "Please do not attempt to contact us so quickly.";
        } else if (data) {
          result =
            "Thank you for getting in contact with us! We will be sure to get back to you within 24 hours!";
        } else {
          result =
            "An error occurred! Try emailing us directly: alex@hytaledata.com";
        }
        this.setState({ email: "", subject: "", message: "", result });
      })
      .catch(console.error);
  };

  render() {
    const required = (
      <span className="required" title="Required">
        *
      </span>
    );

    const { email, subject, message, result } = this.state;

    return (
      <NavFooter>
        <Head>
          <title>Hytale Data - Contact Us</title>
        </Head>

        <div id="form-container">
          <div id="form">
            <h2>Contact Us</h2>
            <form onSubmit={this.onSubmit} className="center">
              <div>
                <label htmlFor="email">Email Address {required}</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="subject"
                  name="subject"
                  value={subject}
                  onChange={this.onChange}
                />
              </div>

              <div>
                <label htmlFor="message">Message {required}</label>
                <textarea
                  type="message"
                  name="message"
                  value={message}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div>
                <Recaptcha action="contact" />
              </div>

              <div>
                <button type="submit">Contact Us</button>
              </div>

              <div>{result}</div>
            </form>
          </div>
        </div>
      </NavFooter>
    );
  }
}
