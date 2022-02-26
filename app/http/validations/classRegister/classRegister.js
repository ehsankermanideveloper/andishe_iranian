const { body } = require("express-validator");

class loginValidator {
  faRegister() {
    return [
      body("username")
        .notEmpty()
        .withMessage("نام و نام خانوادگی دانش آموز را وارد کنید"),
      body("classe").notEmpty().withMessage("کلاس مورد نظر را وارد کنید"),
      body("age").notEmpty().withMessage("سن دانش آموز را وارد کنید"),
      body("nationalId")
        .notEmpty()
        .withMessage("کد ملی دانش آموز را وارد کنید"),
      body("fatherName")
        .notEmpty()
        .withMessage("نام پدر دانش آموز را وارد کنید"),
      body("fatherPhoneNumber")
        .notEmpty()
        .withMessage("شماره تلفن همراه پدر دانش آموز را وارد کنید"),
      body("matherPhoneNumber")
        .notEmpty()
        .withMessage("شماره تلفن همراه مادر دانش آموز را وارد کنید"),
    ];
  }
  enRegister() {
    return [
      body("username")
        .notEmpty()
        .withMessage("Enter student's first and last name"),
      body("classe").notEmpty().withMessage("Enter the class you want"),
      body("age").notEmpty().withMessage("Enter student age"),
      body("nationalId").notEmpty().withMessage("Enter student national code"),
      body("fatherName")
        .notEmpty()
        .withMessage("Enter the student's father's name"),
      body("fatherPhoneNumber")
        .notEmpty()
        .withMessage("Enter the student's father's mobile number"),
      body("matherPhoneNumber")
        .notEmpty()
        .withMessage("Enter the student's mother's mobile number"),
    ];
  }
}

module.exports = new loginValidator();
