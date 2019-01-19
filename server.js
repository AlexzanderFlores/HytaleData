const { parse } = require("url");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const rp = require("request-promise");
const uuid = require("uuid/v4");
const next = require("next");

const { PORT = 3000, NODE_ENV } = process.env;
const dev = NODE_ENV !== "production";
const app = next({ dev });

const targets = {
  "/": "/Home/Home",
  "/index": "/Home/Home",
  "/beta-testing": "/BetaTesting/BetaTesting",
  "/planned-solutions": "/PlannedSolutions/PlannedSolutions",
  "/legal": "/Legal/Legal"
};

const getIp = req => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (ip === "::1") {
    ip = "162.202.163.77";
  }

  return ip;
};

app.prepare().then(() => {
  const server = express();
  server.set("trust proxy", 1);
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(bodyParser.text());
  server.use(
    session({
      secret: uuid(),
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: !dev,
        maxAge: 3600000 // One hour
      }
    })
  );

  server.get("/recaptcha", async (req, res) => {
    const ip = getIp(req);

    let uri = `https://www.google.com/recaptcha/api/siteverify`;
    uri += "?secret=6Ld31IkUAAAAALhC46_yGSsydLWnppsvUPtJNt9g";
    uri += `&response=${req.query.response}`;
    uri += `&remoteip=${ip}`;

    const results = await rp.post(uri).then(data => JSON.parse(data));

    req.session.secure = results.success;
    req.session.action = results.action;
    res.send(req.session.secure);
  });

  server.post("/email-subscribe", async (req, res) => {
    if (req.session.secure && req.session.action === "beta_signup") {
      const ip = getIp(req);
      const { email } = req.query;
      const { body } = req;

      let uri =
        "https://vcz8ncghoc.execute-api.us-east-1.amazonaws.com/dev/email-subscribe?";
      uri += `email=${email}`;
      uri += `&ip=${ip}`;

      await rp({
        uri,
        method: "POST",
        body,
        json: true
      }).catch(err => {
        console.log(err.error);
      });

      res.status(200).send({
        message:
          "Thank you for signing up! You will be notified when beta testing is live. Follow our social media below for frequent updates or to get in contact!"
      });
    } else {
      res.status(400).send({
        message: "Recaptcha check failed!"
      });
    }
  });

  const validPlatforms = ["discord", "twitter", "instagram", "youtube"];

  server.get("/sm/:platform", async (req, res) => {
    let { platform } = req.params;
    let { s: source } = req.query;

    if (platform) {
      platform = platform.toLowerCase();
    }

    if (source) {
      source = source.toLowerCase();
    }

    if (platform && validPlatforms.includes(platform) && source) {
      source = `-${source.toLowerCase()}`;
      let uri =
        "https://vcz8ncghoc.execute-api.us-east-1.amazonaws.com/dev/social-media-track?";
      uri += `platform=${platform}${source}`;
      rp.post(uri);
    }

    let url = `https://${platform}.com/HytaleData`;
    if (platform === "youtube") {
      url = "https://www.youtube.com/channel/UCDedgLAW1v4AYMllKUKzw2w";
    } else if (platform === "discord") {
      url = "https://discord.gg/UGADfhu";
    }

    res.redirect(url);
  });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    let target = targets[pathname];
    if (!target) {
      target = "/Error/Error";
    }

    app.render(req, res, target, query);
  });

  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
