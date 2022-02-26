const http = require("http");
const path = require("path");

const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const expressEjsLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const methodoverride = require("method-override");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const connectMongo = require("connect-mongo");
const passport = require("passport");

const app = express();

const moment = require("moment-jalaali");
moment.loadPersian({ usePersianDigits: true });
moment.loadPersian({ dialect: "persian-modern" });


// MODELS
const School = require("./models/School");
const Class = require('./models/Class')
// ROUTER
const routes = require("./routers/index");
const rememberLogin = require("./http/middlweares/remeberLogin");
// dotenv config
dotenv.config({ path: path.resolve("./.env") });

class application {
  constructor() {
    this.server();
    this.config();
    this.routers();
  }

  server() {
    const server = http.createServer(app);
    server.listen(process.env.HTTP_PORT, () => {
      console.log(`server run on port ${process.env.HTTP_PORT}`);
    });
  }

  async config() {
    // json and urlencoded
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    // ejs
    app.set("view engine", process.env.VIEW_ENGINE);
    app.set("views", path.resolve("./views"));
    // express ejs layouts
    app.use(expressEjsLayouts);
    app.set("layout", process.env.LAYOUTS);
    // public
    app.use(express.static(path.resolve("./public")));
    // db connection
    mongoose.connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("data base connected");
        }
      }
    );
    // cookie
    app.use(cookieParser(process.env.SESSION_SECRET));
    // session
    app.use(
      session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: connectMongo.create({
          mongoUrl: process.env.MONGODB_URL,
        }),
        cookie: { secure: false },
      })
    );

    // passport and auth
    require("./passport/passport-local");
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(rememberLogin.handel);
    // use the flash
    app.use(flash());
    // add school information
    const findSchools = await School.findOne({});
    if (!findSchools) {
      const addSchool = new School({});
      addSchool.save((err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
    // use locals
    app.use( async (req, res, next) => {
      res.locals = {
        convertTime(time) {
          return moment(time);
        },
        user: req.user,
        schoolInfo  : await School.findOne({}),
        Class : await Class.find({})
      };
      next();
    });
    app.use(methodoverride("_method"));
  }

  routers() {
    app.use(routes);
  }
}

module.exports = new application();
