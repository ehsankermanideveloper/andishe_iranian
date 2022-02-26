const { body } = require("express-validator");

class loginValidator {
  faLogin() {
    return [
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
  enLogin() {
    return [
      body("password").custom((value) => {
        if (value.length == 0) {
          throw new Error("Password should not be empty");
        }
        if (value.length < 8) {
          throw new Error("Password should not be less than 8 users");
        }
        return true;
      }),
      body("nationalId").custom((value) => {
        if (value.length == 0) {
          throw new Error("National code should not be empty");
        }
        if (value.length < 10) {
          throw new Error(
            "National code should not be less than 10 detectives"
          );
        }
        return true;
      }),
    ];
  }
}

module.exports = new loginValidator();
