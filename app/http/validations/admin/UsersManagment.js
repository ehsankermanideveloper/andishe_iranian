const { body } = require("express-validator");

class UserManagmentValidatior {
  edit() {
    return [
      body("username").notEmpty().withMessage("نام کاربری نباید خالی باشد"),
      body("nationalId").notEmpty().withMessage("کد ملی نباید خالی باشد"),
      body("password").custom((value) => {
        if (value.length == 0) {
          return true;
        }
        if (value.length >= 1 && value.length < 8) {
          throw new Error("رمز عبور نباید کمتر از 8 کارکتر باشد");
        }
        return true;
      }),
    ];
  }

  add() {
    return [
      body("username").notEmpty().withMessage("نام کاربری نباید خالی باشد"),
      body("password").custom((value) => {
        if (value.length == 0) {
          throw new Error("رمز عبور نباید خالی باشد");
        }
        if (value.length < 8) {
          throw new Error("رمز عبور نباید از 8 کارکتر کمتر باشد");
        }
        return true;
      }),
      body("nationalId").custom((value) => {
        if (value.length == 0) {
          throw new Error("کد ملی نباید خالی باشد");
        }
        if (value.length < 10) {
          throw new Error("کد ملی نباید کمتر از 10 کارکتر باشد");
        }
        return true;
      }),
    ];
  }
}

module.exports = new UserManagmentValidatior();
