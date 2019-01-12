const { parse } = require("url");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");
const next = require("next");

const { PORT = 3000, NODE_ENV } = process.env;
const dev = NODE_ENV !== "production";
const app = next({ dev });

const targets = {
  "/": "/Home/Home",
  "/index": "/Home/Home"
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
