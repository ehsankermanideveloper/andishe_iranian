// MODESL
const Users = require("../../../../../../models/users");

const passport = require("passport");

class registerController {
  index(req, res, next) {
    const options = {
      title: "register page",
    };
    return res.render("./public/en/auth/register/index", {
      options,
      ClientError: req.flash("ClientError"),
      SystemError: req.flash("SystemError"),
    });
  }

  async store(req, res, next) {
    passport.authenticate("local.register", (err, user) => {
      if (!user || err) {
        if (req.originalUrl.includes("fa")) {
          res.redirect("/fa/auth/register");
        } else {
          res.redirect("/en/auth/register");
        }
      } else {
        req.login(user, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(req.user);
            return res.redirect('/en')
          }
        });
      }
    })(req, res, next);
  }
}

module.exports = new registerController();
