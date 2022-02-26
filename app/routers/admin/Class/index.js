const express = require("express");
const router = express.Router();

// CONTROLLERS
const ClassesController = require("../../../http/controllers/admin/Classes/classesController");
// MIDDLARES

// VALIDATIONS
const validation = require("../../../http/middlweares/validation");
const ClassValidator = require("../../../http/validations/admin/Class");
// ROUTEING

router.get("/", ClassesController.index);
router.get("/create", ClassesController.create);
router.post(
  "/create",
  ClassValidator.storeAndEdit(),
  validation,
  ClassesController.store
);
router.get("/:title/edit", ClassesController.update);
router.put(
  "/:titleAddress/edit",
  ClassValidator.storeAndEdit(),
  validation,
  ClassesController.edit
);

router.get("/student/:id", ClassesController.classStudents);
module.exports = router;
