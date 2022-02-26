const router = require("express").Router();

// CONTROLLER
const aboutController = require("../../../../http/controllers/public/en/about/aboutController");

// ROUTEING
router.get("/", aboutController.index);
module.exports = router;
