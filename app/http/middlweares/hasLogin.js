module.exports.noToken = (req, res, next) => {
  if (req.user) {
    if (req.originalUrl.includes("fa")) {
      return res.redirect("/fa");
    } else {
      return res.redirect("/en");
    }
  }
  next();
};

module.exports.hasToken = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/");
  }
  next();
};

