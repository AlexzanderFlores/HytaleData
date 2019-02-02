const { parse } = require("url");
const { join } = require("path");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const rp = require("request-promise");
const uuid = require("uuid/v4");
const compression = require("compression");
const next = require("next");

const { PORT = 3000, NODE_ENV } = process.env;
const dev = NODE_ENV !== "production";
const app = next({ dev });

const swaggerUi = require("swagger-ui-express");
const fs = require("fs");

const targets = {
  "/": "/Home/Home",
  "/index": "/Home/Home",
  "/beta-testing": "/BetaTesting/BetaTesting",
  "/beta-testing-component": "/BetaTesting/BetaTestingComponent",
  "/planned-solutions": "/PlannedSolutions/PlannedSolutions",
  "/affiliate-program": "/AffiliateProgram/AffiliateProgram",
  "/legal": "/Legal/Legal",
  "/nav": "/Navigation/MainNavigation",
  "/footer": "/Footer/Footer"
};

const isLocalHost = req => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  return ip === "::1" || ip === "::ffff:127.0.0.1";
};

const getIp = req => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (isLocalHost(req)) {
    ip = "162.202.163.77";
  }

  return ip;
};

app.prepare().then(async () => {
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
  server.use(compression());

  // Force HTTPS
  server.use((req, res, next) => {
    if (!isLocalHost(req) && req.protocol === "http") {
      return res.redirect("https://" + req.get("host") + req.originalUrl);
    }
    next();
  });

  // Load swagger CSS
  let css = "";
  await new Promise((resolve, reject) => {
    fs.readFile("./static/swagger.css", "utf8", (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  })
    .then(contents => (css = contents))
    .catch(console.error);

  // Load swagger API JSON
  let json = "";

  const loadApiData = async () => {
    await rp({
      uri: "https://cdn.hytaledata.com/api.json",
      json: true
    }).then(api => (json = api));

    setTimeout(loadApiData, 1000 * 60);
  };

  await loadApiData();

  const options = {
    customfavIcon: "https://cdn.hytaledata.com/favicon.ico",
    customSiteTitle: "Hytale Data - API",
    customCss: css,
    customJs: "/swagger.js"
  };

  // Serve swagger UI on GET /api
  server.use("/api", swaggerUi.serve, swaggerUi.setup(json, options));

  server.get("/recaptcha", async (req, res) => {
    const ip = getIp(req);

    let uri = "https://www.google.com/recaptcha/api/siteverify";
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
      const { email, firstname } = req.query;
      const { body } = req;

      let uri =
        "https://vcz8ncghoc.execute-api.us-east-1.amazonaws.com/dev/email-subscribe?";
      uri += `email=${email}`;
      uri += `&firstname=${firstname}`;
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

    const rootStaticFiles = ["/robots.txt", "/sitemap.xml", "/swagger.js"];
    if (rootStaticFiles.indexOf(pathname) > -1) {
      const path = join(__dirname, "static", pathname);
      app.serveStatic(req, res, path);
      return;
    }

    let target = targets[pathname];
    if (!target) {
      target = "/Error/Error";
    }

    app.render(req, res, target, query);
  });

  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
