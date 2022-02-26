// MODELS
const Teachers = require("../../../../../models/Teachers");
const Lanugages = require("../../../../../models/Language");
class teacherController {
  async index(req, res, next) {
    try {
      const options = {
        title: "Teachers",
      };
      const language = await Lanugages.findOne({ title: "انگلیسی" });
      const teachers = await Teachers.find({ language: language.id });
      return res.render("./public/en/Teachers/index", { options, teachers });
    } catch (error) {
      console.log(error);
      return res.redirect("/en");
    }
  }

  async detail(req, res, next) {
    try {
      const { firstName, lastName, teacherFor } = req.params;
      const language = await Lanugages.findOne({ title: "انگلیسی" });
      const teacher = await Teachers.findOne({
        firstName,
        lastName,
        teacherFor,
        language: language.id,
      });
      if (!teacher) {
        return res.redirect("/en/teachers");
      }
      const options = {
        title: firstName + " " + lastName,
      };
      return res.render("./public/en/Teachers/details", { options, teacher });
    } catch (error) {
      console.log(error);
      return res.redirect("/en/teachers");
    }
  }
}

module.exports = new teacherController();
