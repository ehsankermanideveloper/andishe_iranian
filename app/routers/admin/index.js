const express = require("express");
const router = express.Router();

const path = require("path");

// ROUTES
const language = require("./Language/index");
const teacher = require("./Teacher/index");
const usersmanagment = require("./UserManagment/index");
const gallery = require("./Gallery/index");
const classes = require("./Class/index");
const school = require("./School/index");
const privacy = require('./Privacy/index');
const Category = require('./Category/index')
// controllers
const indexController = require("../../http/controllers/admin/indexController");

// set the ejs master page
router.use((req, res, next) => {
  res.locals.layout = path.resolve("./views/admin/master");
  next();
});

router.get("/", indexController.index);

router.use("/languages", language);
router.use("/teachers", teacher);
router.use("/usersmanagment", usersmanagment);
router.use("/gallerys", gallery);
router.use("/classes", classes);
router.use("/school", school);
router.use('/privacys' , privacy);
router.use('/categorys' , Category)
module.exports = router;
