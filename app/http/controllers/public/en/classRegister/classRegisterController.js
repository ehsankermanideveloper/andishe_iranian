const ClassRegister = require("../../../../../models/ClassRegister");
const Class = require("../../../../../models/Class");

class classRegister {
  async index(req, res, next) {
    const options = {
      title: "class register page",
    };
    const classes = await Class.find({});
    return res.render("./public/en/classRegister/index", {
      ClientError: req.flash("ClientError"),
      classes,
      options,
    });
  }
  async store(req, res, next) {
    const {
      username,
      classe,
      age,
      nationalId,
      fatherName,
      fatherPhoneNumber,
      matherPhoneNumber,
    } = req.body;
    const findClass = await Class.findById(classe);
    if (!findClass) {
      req.flash("ClientError", [
        "Such a class is not available on the website",
      ]);
      return res.redirect("/en/classRegister/create");
    }
    const addClassRegister = new ClassRegister({
      username,
      class: classe,
      age,
      nationalId,
      fatherName,
      fatherPhoneNumber,
      matherPhoneNumber,
    });
    addClassRegister.save((err, data) => {
      if (err) {
        req.flash("ClientErorr", ["Operation failed"]);
        return res.redirect("/en/classRegister");
      } else {
        req.flash("ClientErorr", ["Operation successfully performed"]);
        return res.redirect("/en/classRegister");
      }
    });
  }
}

module.exports = new classRegister();
