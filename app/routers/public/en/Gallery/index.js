const router = require("express").Router();

// CONTROLLER
const galleryController = require("../../../../http/controllers/public/en/Gallerys/galleryController");

// ROUTEING
router.get("/", galleryController.index);
module.exports = router;
