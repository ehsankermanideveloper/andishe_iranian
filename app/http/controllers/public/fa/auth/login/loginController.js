const passport = require("passport");

class loginController {
  index(req, res, next) {
    const options = {
      title: "صفحه ی ورود",
    };
    return res.render("./public/fa/auth/login/index", {
      options,
      ClientError: req.flash("ClientError"),
      SystemError: req.flash("SystemError"),
    });
  }

  async login(req, res, next) {
    passport.authenticate("local.login", (err, user) => {
      if (!user || err) {
        if (req.originalUrl.includes("fa")) {
          res.redirect("/fa/auth/login");
        } else {
          res.redirect("/en/auth/login");
        }
      } else {
        req.login(user, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(req.user);
            return res.redirect("/fa");
          }
        });
      }
    })(req, res, next);
  }
}

module.exports = new loginController();
