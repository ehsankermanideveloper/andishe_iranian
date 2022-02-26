module.exports = (roles) => (req, res, next) => {
  if (req.user.role == "admin") {
    return next();
  }
  if (roles.includes(req.user.role)) {
    return next();
  }  
  return res.redirect(req.header("Referer") || '/');
};
