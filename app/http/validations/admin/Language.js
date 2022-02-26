const { body } = require("express-validator");

class languageValidator {
  storeAndEdit() {
    return [body("title").notEmpty().withMessage("عنوان زبان نباید خالی باشد")];
  }
}

module.exports = new languageValidator();
