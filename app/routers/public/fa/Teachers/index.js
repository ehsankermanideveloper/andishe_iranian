const router = require("express").Router();

// CONTROLLERS
const teacherController = require("../../../../http/controllers/public/fa/Teachers/teacherController");

// ROUTEING

router.get("/", teacherController.index);
router.get('/:firstName/:lastName/:teacherFor/detail' , teacherController.detail)

module.exports = router;
