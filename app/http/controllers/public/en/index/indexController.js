// MODELS
const Teachers = require("../../../../../models/Teachers");
const Classes = require("../../../../../models/Class");
const School = require('../../../../../models/School');
const Languages = require("../../../../../models/Language");
class indexController {
  async index(req, res, next) {
    const options = {
      title: "Home",
    };
    const language = await Languages.findOne({ title: "انگلیسی" });
    const teahcers = await Teachers.find({ language: language.id }).limit(4);
    const classes = await Classes.find({});
    const school = await School.findOne({});
    return res.render("./public/en/index", {
      options,
      teahcers,
      classes,
      school,
      ClientError: req.flash("ClientError"),
    });
  }
}

module.exports = new indexController();
