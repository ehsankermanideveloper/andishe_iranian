const router = require("express").Router();

// CONTROLLERS
const loginController = require("../../../../../http/controllers/public/fa/auth/login/loginController");
// VALIDATIONs
const validation = require("../../../../../http/middlweares/validation");
const loginValidator = require("../../../../../http/validations/auth/login");
// Routering
router.get("/", loginController.index);
router.post("/", loginValidator.faLogin(), validation, loginController.login);
module.exports = router;
