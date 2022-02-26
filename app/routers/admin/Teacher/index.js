const express = require("express");
const router = express.Router();

// CONTROLLERS
const teachersController = require("../../../http/controllers/admin/Teachers/teacherController");

// MIDDLWARES
const fileToFiled = require("../../../http/middlweares/fileToField");

// HELPERS
const uplodasImage = require("../../../helpers/uplodasImage");

// VALIDATIONS
const validation = require("../../../http/middlweares/validation");
const teachersValidator = require("../../../http/validations/admin/Teacher");
const teacherController = require("../../../http/controllers/admin/Teachers/teacherController");
// ROITEING
router.get("/", teachersController.index);
router.get("/create", teachersController.create);
router.post(
  "/create",
  uplodasImage.any(),
  fileToFiled(["profile"]),
  teachersValidator.createAndUpdate(),
  validation,
  teacherController.store
);
// update
router.get("/:id/edit", teachersController.update);
router.put(
  "/:id/edit",
  uplodasImage.any(),
  fileToFiled(["profile"]),
  teachersController.edit
);
// delete
router.delete("/:id/remove", teachersController.delete);
module.exports = router;
