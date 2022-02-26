// MODELS
const Teachers = require("../../../../../models/Teachers");
const Classes = require("../../../../../models/Class");
const Languages = require("../../../../../models/Language");
const School = require("../../../../../models/School");
class indexController {
  async index(req, res, next) {
    const options = {
      title: "صفحه ی اصلی",
    };
    const language = await Languages.findOne({ title: "فارسی" });
    const teahcers = await Teachers.find({ language: language.id });
    const school = await School.findOne({});
    const classes = await Classes.find({});
    return res.render("./public/fa/index", {
      options,
      teahcers,
      classes,
      school,
      ClientError: req.flash("ClientError"),
    });
  }
}

module.exports = new indexController();
