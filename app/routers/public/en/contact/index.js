const router = require("express").Router();

// CONTROLLER
const contactController = require("../../../../http/controllers/public/en/contact/contactController");

// ROUTEING
router.get("/", contactController.index);
module.exports = router;
