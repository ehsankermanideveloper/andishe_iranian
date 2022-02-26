const ClassRegister = require("../../../../../models/ClassRegister");
const Class = require("../../../../../models/Class");

class classRegister {
  async index(req, res, next) {
    const options = {
      title: "پیش ثبت نام",
    };
    const classes = await Class.find({});
    return res.render("./public/fa/classRegister/index", {
      ClientError: req.flash("ClientError"),
      classes,
      options
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
      req.flash("ClientError", ["چنین کلاسی در وب سایت موجود نمی باشد"]);
      return res.redirect("/fa/classRegister");
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
        req.flash("ClientErorr", ["عملیات با موفقیت انجام نشد"]);
        return res.redirect("/fa/classRegister");
      } else {
        req.flash("ClientErorr", ["عملیات با موفقیت انجام شد"]);
        return res.redirect("/fa/classRegister");
      }
    });
  }
}

module.exports = new classRegister();
