const router = require("express").Router();

// CONTROLLER
const privacyController = require("../../../../http/controllers/public/en/privacy/privacyController");

// ROUTEING
router.get("/", privacyController.index);
module.exports = router;
