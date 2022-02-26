const router = require("express").Router();

// CONTROLLERS
const schoolController = require("../../../http/controllers/admin/Schools/schoolController");

router.get("/edit", schoolController.update);
router.put("/edit", schoolController.edit);

module.exports = router;
