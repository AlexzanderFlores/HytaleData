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

  // server.get('/recaptcha', async (req, res) => {
  //   let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //   if (ip === '::1') {
  //     ip = '162.202.163.77';
  //   }

  //   let uri = `https://www.google.com/recaptcha/api/siteverify`;
  //   uri += '?secret=6Lf4xoQUAAAAAIL5qq-Vsh5oGefJsraBH7BGNHJD';
  //   uri += `&response=${req.query.response}`;
  //   uri += `&remoteip=${ip}`;

  //   const results = await rp.post(uri).then(data => JSON.parse(data));

  //   req.session.secure = results.success;
  //   res.send(req.session.secure);
  // });

  // server.post('/send-email', async (req, res) => {
  //   if (req.session.secure) {
  //     console.log(req.body);
  //     const uri = 'https://api.nestnetworking.com/dev/send-email';
  //     const results = await rp
  //       .post(uri, {
  //         body: JSON.stringify(req.body),
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       })
  //       .then(message => ({ message }));
  //     console.log(results);
  //     res.send(results);
  //   } else {
  //     res.send({ secure: false });
  //   }
  // });

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
