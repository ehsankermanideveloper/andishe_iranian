const { body } = require("express-validator");

class galleryValidator {
  create() {
    return [body("imageDir").notEmpty().withMessage("عکس رو انتخاب کنید")];
  }
}

module.exports = new galleryValidator();
