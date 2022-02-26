const { body } = require("express-validator");

class classesValidator {
  storeAndEdit() {
    return [body("title").notEmpty().withMessage("عنوان زبان نباید خالی باشد")];
  }
}

module.exports = new classesValidator();
