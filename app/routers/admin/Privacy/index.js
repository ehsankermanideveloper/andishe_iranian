const express = require("express");
const router = express.Router();

// CONTROLLERS
const privacyController = require("../../../http/controllers/admin/Privacy/privacyController");



// VALIDATIONS
const validation = require("../../../http/middlweares/validation");
const privacyValidator = require("../../../http/validations/admin/Privacy");

// ROITEING
router.get("/", privacyController.index);
router.get("/create", privacyController.create);
router.post(
  "/create",
    privacyValidator.createAndUpdate(),
  validation,
    privacyController.store
);
// // update
router.get("/:id/edit", privacyController.update);
router.put(
  "/:id/edit",
  privacyValidator.createAndUpdate(),
  validation,
    privacyController.edit
);
// delete
router.delete("/:id/remove", privacyController.delete);
module.exports = router;
