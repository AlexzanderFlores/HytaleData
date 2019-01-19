import Head from "next/head";
import NavFooter from "../NavFooter";
import SmartLink from "../SmartLink";
import "./Legal.css";

export default class Legal extends React.Component {
  company = "Hytale Data";

  scrollTo = target => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <NavFooter>
        <Head>
          <title>Hytale Data - Legal</title>
        </Head>

        <div className="legal-container center">
          <div className="legal center">
            <div>
              These terms were last updated on January 18th, 2019.
              <br />
              <br />
            </div>

            <div id="legal-definitions">
              Throughout the site, the terms "we", "us", and "our" refer to
              Hytale Data. The terms "site" and "website" refer to
              HytaleData.com, which is owned and operated by Hytale Data. The
              terms "you", and "your" refer to website visitors, users, and
              customers. We offer this website, including all information, tools
              and services available from this site to you, the user,
              conditioned upon your acceptance of all terms, conditions,
              policies and notices stated here.
              <br />
              <br />
              By visiting our site, creating an account, or subscribing to a
              paid plan, you engage in our "Service" and agree to be bound by
              the following terms and conditions, privacy policy, and refund
              policy (Collectively "Terms"). These Terms apply to all users of
              the site. Please read the Terms of Service, Privacy Policy, and
              Refund Policy carefully before accessing or using our website.
            </div>

            <div id="terms-of-service">
              <div className="legal-title">Terms of Service</div>
              <ol>
                <li>
                  We reserves the right to terminate your account at any time
                  with or without prior warning if we believe you are breaking
                  our terms.
                </li>
                <li>
                  You may NOT modify, redistribute, decompile, or reverse
                  engineer any our plugins, source code, or services in any way.
                </li>
                <li>
                  We are NOT responsible for any loss of data, revenue, or
                  uptime that may occur when using our services. This includes,
                  but is not limited to, downtime, bugs, and glitches.
                </li>
                <li>
                  You may NOT attempt to chargeback or request a refund outside
                  of the{" "}
                  <span
                    className="legal-scroll-to"
                    onClick={this.scrollTo.bind(this, "refund-policy")}
                  >
                    Refund Policy's
                  </span>{" "}
                  terms listed on this page.
                </li>
                <li>
                  We reserves the right to remove, change, and limit any of our
                  features at any time with or without prior warning.
                </li>
                <li>All of our features are provided on an "as-is" basis.</li>
                <li>
                  You may NOT send data to our servers outside of the official
                  APIs and plugins.
                </li>
                <li>
                  Any data you provide to us may be used internally to improve
                  our services.
                </li>
                <li>
                  We cannot guarantee the accuracy or legitimacy of any data
                  provided by our services.
                </li>
                <li>
                  These terms and conditions are governed and construed in
                  accordance with the laws of California, United States and you
                  irrevocably submit to the exclusive jurisdiction of the courts
                  in that state or location.
                </li>
              </ol>
            </div>

            <div id="privacy-policy">
              <div className="legal-title">Privacy Policy</div>
              <div>
                This Privacy Policy governs what data we collect and what we do
                with that data. This Privacy Policy only applies to our website.
                Downloadable content and software such as plugins and scripts
                will have their own Privacy Policy on the download page.
                <br />
                <br />
                This website is not intended for children and we do not
                knowingly collect data relating to children. We realise and
                understand that children and young people may visit this
                website, or otherwise interact with us and our commercial
                partners. It is our policy to encourage all minors to consult
                with their parents or legal guardian before submitting any
                content or information to us, our commercial partners or other
                third parties.
              </div>

              <div className="pp-section">
                <div className="pp-title">When do we collect data?</div>
                <p>
                  We collect user data whenever a user opts in to our email
                  list, creates an account, pays for a subscription billing
                  plan, or contacts customer support.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-title">What data do we collect?</div>
                <p>
                  Often times we only collect email addresses from our users.
                  Only when necessary will we ask for and collect mailing
                  addresses and phone numbers.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-title">Why do we need your data?</div>
                <p>Data is collected for a number of reasons:</p>
                <br />
                <ul style={{ listStyleType: "disc" }}>
                  <li>Deliver a more personalized experience to our users.</li>
                  <li>
                    Confirm and secure registered accounts and customer support
                    contact sessions.
                  </li>
                  <li>Optimize our digital advertising campaigns.</li>
                  <li>
                    Reach out to our customers via email for promotions,
                    surveys, and contest results.
                  </li>
                </ul>
              </div>

              <div className="pp-section">
                <div className="pp-title">
                  How is payment information collected and stored?
                </div>
                <p>
                  We use{" "}
                  <SmartLink
                    display="Stripe"
                    link="//stripe.com"
                    newTab
                    underline
                  />{" "}
                  to process all payments. We cannot view or access your full
                  credit card number, expiration date, or security code. We are
                  only given access to the last 4 digits of your card number for
                  verification purposes.
                  <br />
                  <br />
                  All payments are secure and up to PCI standards to ensure your
                  payment data never gets into the wrong hands. Click{" "}
                  <SmartLink
                    display="here"
                    link="//stripe.com/docs/security"
                    newTab
                    underline
                  />{" "}
                  for more information on how Stripe handles payments and legal
                  compliance.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-title">How do we protect your data?</div>
                <p>
                  All data collected is done so over SSL (Secure Socket Layer)
                  technology which encrypts your data. Our website and servers
                  are hosted on{" "}
                  <SmartLink
                    display="Amazon Web Services"
                    link="//aws.amazon.com"
                    newTab
                    underline
                  />{" "}
                  and the industry standard security practices are in place.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-title">Do we use "cookies"?</div>
                <p>
                  Yes, browser cookies are used to improve your experience on
                  our website. Browser cookies are very small files that are
                  stored on your computer whenever you visit a website. These
                  files help us remember your preferences and settings for your
                  next visit. Browser cookies are used on nearly every website
                  and do not pose any harm or negative affects.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-title">Do we share your data?</div>
                <p>
                  The only data that would potentially be shared is your email
                  addresses. Social media advertising platforms allow us to
                  submit a list of emails to better understand the audience that
                  our company is trying to reach. You will never be sent an
                  email from this process.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-title">When is my data deleted?</div>
                <p>
                  Any and all data we have collected from a user will be deleted
                  7 days after they have terminated their own account.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-title">
                  Compliance with children's online privacy protection act
                </div>
                <p>
                  Protecting the privacy of the very young is especially
                  important. For that reason, we never collect or maintain
                  information at our Site from those we actually know are under
                  13, and no part of our website is structured to attract anyone
                  under 13.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-title">Changes to this Privacy Policy</div>
                <p>
                  We reserve the right to update this policy at any time with or
                  without prior warning. It is your responsibility to check this
                  page for updates to our terms. The date this page has been
                  updated at can always be found at the top.
                </p>
              </div>
            </div>
            <div id="refund-policy">
              <div className="legal-title">Refund Policy</div>
              <div>
                The refund policy will be made public once open beta testing
                begins.
              </div>
            </div>
          </div>
        </div>
      </NavFooter>
    );
  }
}
