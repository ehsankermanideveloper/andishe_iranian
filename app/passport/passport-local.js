const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/users");
const remember = require("../http/middlweares/remeberLogin");
const bcrypt = require("bcrypt");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  "local.register",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      User.findOne({ nationalId: req.body.nationalId }, async (err, user) => {
        if (err)
          return done(
            err,
            false,
            req.flash(
              "SystemError",
              req.originalUrl.includes("fa")
                ? "ثبت نام امکان پذیر نمی باشد لطفا دورباره امتحان کنید"
                : "Registration is not possible please try remotely"
            )
          );
        if (user)
          return done(
            null,
            false,
            req.flash(
              "ClientError",
              req.originalUrl.includes("fa")
                ? "کاربری با این ایمیل در سایت عضو است"
                : "A user is a member of this email on the site"
            )
          );
        if (!user) {
          let salt = bcrypt.genSaltSync(5);
          let hashPass = bcrypt.hashSync(req.body.password, salt);
          const adduser = new User({
            ...req.body,
            password: hashPass,
            role: "user",
          });
          adduser.save((err, newuser) => {
            if (err) throw err;
            done(null, newuser);
          });
        }
      });
    }
  )
);

passport.use(
  "local.login",
  new localStrategy(
    {
      usernameField: "nationalId",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, nationalId, password, done) => {
      User.findOne({ nationalId: nationalId }).then((result) => {
        if (result) {
          let chekPassword = result.comparePassword(password , result.password);
          if (chekPassword) {
            done(null, result);
          } else {
            return done(
              null,
              false,
              req.flash(
                "ClientError",
                req.originalUrl.includes("fa")
                  ? "رمز عبور صحیح نمی باشد"
                  : "Password is incorrect"
              )
            );
          }
        } else {
          return done(
            null,
            false,
            req.flash(
              "ClientError",
              req.originalUrl.includes("fa")
                ? "کاربری با این  مشخصات یافت نشد"
                : "No user found with this profile"
            )
          );
        }
      });
    }
  )
);
