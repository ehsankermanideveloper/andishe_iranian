const router = require("express").Router();
// change the ejs layout

// CONTROLLER
const classRegisterController = require("../../../../http/controllers/public/fa/classRegister/classRegisterController");
// VALIDATIONS
const validation = require("../../../../http/middlweares/validation");
const classRegisterValidator = require("../../../../http/validations/classRegister/classRegister");
// MIDDLWARES

router.get("/", classRegisterController.index);

router.post(
  "/",
  classRegisterValidator.faRegister(),
  validation,
  classRegisterController.store
);

module.exports = router;
