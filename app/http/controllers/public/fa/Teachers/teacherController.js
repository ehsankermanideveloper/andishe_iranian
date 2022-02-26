// MODELS
const Teachers = require("../../../../../models/Teachers");
const Lanugages = require("../../../../../models/Language");
class teacherController {
  async index(req, res, next) {
    try {
      const options = {
        title: "دبیران",
      };
      const language = await Lanugages.findOne({ title: "فارسی" });
      const teachers = await Teachers.find({ language: language.id });
      return res.render("./public/fa/Teachers/index", { options, teachers });
    } catch (error) {
      console.log(error);
      return res.redirect("/fa");
    }
  }

  async detail(req, res, next) {
    try {
      const { firstName, lastName, teacherFor } = req.params;
      const language = await Lanugages.findOne({ title: "فارسی" });
      const teacher = await Teachers.findOne({
        firstName,
        lastName,
        teacherFor,
        language: language.id,
      });
      if (!teacher) {
        return res.redirect("/fa/teachers");
      }
      const options = {
        title: firstName + " " + lastName,
      };
      return res.render("./public/fa/Teachers/details", { options, teacher });
    } catch (error) {
      console.log(error);
      return res.redirect("/fa/teachers");
    }
  }
}

module.exports = new teacherController();
