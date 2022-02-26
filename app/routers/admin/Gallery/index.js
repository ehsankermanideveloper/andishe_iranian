const router = require("express").Router();

// CONTROLLERS
const galleryController = require("../../../http/controllers/admin/Gallerys/galleryController");
// MIDDLWARES
const fileToField = require("../../../http/middlweares/fileToField");
// VALIDATIONS
const validation = require("../../../http/middlweares/validation");
const galleryValidator = require("../../../http/validations/admin/Gallery");
// HELPERS
const imageUploader = require("../../../helpers/uplodasImage");
router.get("/", galleryController.index);
router.get("/create", galleryController.create);
router.post(
  "/create",
  imageUploader.any(),
  fileToField(["imageDir"]),
  galleryValidator.create(),
  validation,
  galleryController.store
);

router.delete("/:id/remove", galleryController.remove);
module.exports = router;
