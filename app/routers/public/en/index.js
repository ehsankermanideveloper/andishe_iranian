const path = require("path");

const router = require("express").Router();

// ROUTES
const auth = require("../../../routers/public/en/auth/index");
const ClassRegister = require("./classRegister/index");
const Gallery = require("./Gallery/index");
const Teachers = require("./Teachers/index");
const about = require('./about/index');
const contact = require('./contact/index');
const privacy = require('./privacy/index');
// change the ejs layout
const School = require('../../../models/School');
const Class = require('../../../models/Class')
// set the ejs master page
router.use( async (req, res, next) => {
  res.locals.layout = path.resolve("./views/enMaster");
  res.locals.user = req.user
  res.locals.schoolInfo  = await School.findOne({});
  res.locals.classes = await Class.find({})
  next();
});

// controller
const indexController = require("../../../http/controllers/public/en/index/indexController");
const logoutController = require("../../../http/controllers/public/fa/auth/logoutController");
// ROUTERS

router.get("/", indexController.index);
router.use("/auth", auth);
router.use("/classRegister", ClassRegister);
router.use("/gallery", Gallery);
router.use("/teachers", Teachers);
router.use('/about' , about);
router.use('/privacy' , privacy);
router.use('/contact' , contact)
// logout
router.get("/logout", logoutController.logout);

module.exports = router;
