class logoutController {
  logout(req, res, next) {
    req.logout();
    return res.redirect(req.originalUrl.includes("fa") ? "/fa" : "/en");
  }
}

module.exports = new logoutController();
