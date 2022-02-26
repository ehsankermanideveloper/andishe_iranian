const router = require("express").Router();

// CONTROLLERS
const registerController = require("../../../../../http/controllers/public/fa/auth/register/registerController");
// VALIDATIONS
const validation = require("../../../../../http/middlweares/validation");
const registerValidator = require("../../../../../http/validations/auth/register");
router.get("/", registerController.index);
router.post(
  "/",
  registerValidator.faStore(),
  validation,
  registerController.store
);
module.exports = router;
