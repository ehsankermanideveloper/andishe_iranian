const path = require("path");
const router = require("express").Router();
// change the ejs layout
const School = require("../../../models/School");
const Class = require('../../../models/Class')
router.use( async (req, res, next) => {
    res.locals.layout = path.resolve("./views/master");
    res.locals.user = req.user
    res.locals.schoolInfo = await School.findOne({});
    res.locals.classes = await Class.find({})
    next();
});

// CONTROLLER
const indexController = require("../../../http/controllers/public/fa/index/indexController");
const logoutController = require("../../../http/controllers/public/fa/auth/logoutController");
// ROUTERS
const Auth = require("./auth/index");
const ClassRegister = require("./classRegister/index");
const Gallery = require("./Gallery/index");
const teachers = require("./Teachers/index");
const about = require('./about/index');
const privacy = require('./privacy/index');
const contact = require('./contact/index')

router.get("/", indexController.index);

// Auth
router.use("/auth", Auth);
router.use("/classRegister", ClassRegister);
router.use("/gallery", Gallery);
router.use("/teachers", teachers);
router.use('/about' , about);
router.use('/privacy' , privacy);
router.use('/contact' , contact);
// logout
router.get("/logout", logoutController.logout);
module.exports = router;
