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
  "/contact": "/Contact/Contact",
  "/nav": "/Navigation/MainNavigation",
  "/footer": "/Footer/Footer",
  "/minecraft-java-health": "/Minecraft/MinecraftJavaHealth/MinecraftJavaHealth"
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
  // server.use((req, res, next) => {
  //   if (!isLocalHost(req) && req.protocol === "http") {
  //     return res.redirect("https://" + req.get("host") + req.originalUrl);
  //   }
  //   next();
  // });

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

      let uri = "https://api.hytaledata.com/dev/email-subscribe?";
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
      let uri = "https://api.hytaledata.com/dev/social-media-track?";
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

  const emailRateLimit = [];

  server.post("/send-email", async (req, res) => {
    if (req.session.secure && req.session.action === "contact") {
      const ip = getIp(req);

      if (emailRateLimit.indexOf(ip) >= 0) {
        res.send({ rateLimit: true });
        return;
      }

      emailRateLimit.push(ip);
      setTimeout(
        () => emailRateLimit.filter(limited => limited !== ip),
        1000 * 60 * 5
      );

      let { email, subject, message } = req.body;
      if (!subject) {
        subject = "";
      }
      subject = `Contact Form: ${subject}`;

      let uri = `https://api.hytaledata.com/dev/send-email?address=alex@hytaledata.com&subject=${subject}`;
      message += `\n\nfrom ${email}`;
      console.log(uri);
      console.log(message);

      const emailToUs = await rp
        .post(uri, {
          body: JSON.stringify({ message }),
          json: true
        })
        .then(() => true)
        .catch(() => false);
      console.log(emailToUs);

      uri = `https://api.hytaledata.com/dev/send-email?address=${email}&subject=${encodeURI(
        "Hytale Data Contact"
      )}`;

      console.log(uri);

      const emailToThem = await rp
        .post(uri, {
          body: JSON.stringify({
            message:
              "Thank you for reaching out to Hytale Data! We will be sure to get back to you within 24 hours."
          }),
          json: true
        })
        .then(() => true)
        .catch(() => false);
      console.log(emailToThem);

      res.send({ success: emailToUs && emailToThem });
    } else {
      res.send({ secure: false });
    }
  });

  const addServerRateLimited = [];

  server.post("/add-server", async (req, res) => {
    const ip = getIp(req);
    if (addServerRateLimited.indexOf(ip) >= 0) {
      res.send({ rateLimit: true });
      return;
    }

    addServerRateLimited.push(ip);
    setTimeout(
      () => addServerRateLimited.filter(limited => limited !== ip),
      1000 * 60 * 2
    );

    const { ip: address, name } = req.query;

    const uri = `https://api.hytaledata.com/dev/minecraft/servers?ip=${address}&name=${name}`;

    const data = JSON.parse(await rp.post(uri));

    if (data.errorMessage) {
      res.send({
        failedToPing: true
      });
      return;
    }

    res.send(data);
  });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    let { pathname, query } = parsedUrl;

    if (pathname !== "/" && pathname.endsWith("/")) {
      pathname = pathname.substr(0, pathname.length - 1);
    }

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
