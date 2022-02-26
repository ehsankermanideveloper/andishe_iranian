const { validationResult } = require("express-validator");

module.exports = async (req, res, next) => {
  const validationing = await validationResult(req);
  if (validationing.isEmpty()) {
    return next();
  }
  const errors = [];
  //   forEach in error and push the msg to errors array
  validationing.errors.forEach((err) => {
    errors.push(err.msg);
  });
  //   set error to ClientError
  req.flash("ClientError", errors);
  //   req.redirect
  return res.redirect(req.header("Referer") || "/");
};
