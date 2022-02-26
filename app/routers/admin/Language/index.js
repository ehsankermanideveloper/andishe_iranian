const express = require("express");
const router = express.Router();

// CONTROLLERS
const languageController = require("../../../http/controllers/admin/language/languageController");
// MIDDLARES

// VALIDATIONS
const validation = require("../../../http/middlweares/validation");
const languageValidator = require("../../../http/validations/admin/Language");
// ROUTEING

router.get("/", languageController.index);

router.get("/create", languageController.create);

router.post(
  "/create",
  languageValidator.storeAndEdit(),
  validation,
  languageController.store
);

router.get("/:title/edit", languageController.update);

router.put(
  "/:titleAddress/edit",
  languageValidator.storeAndEdit(),
  validation,
  languageController.edit
);

module.exports = router;
