// MODUELS
const Classes = require("../../../../models/Class");
const ClassRegister = require("../../../../models/ClassRegister");
class ClassesController {
  async index(req, res, next) {
    try {
      const classes = await Classes.find({});
      const options = {
        title: "مدیریت کلاس ها",
      };

      return res.render("./admin/Classes/index", { options, classes });
    } catch (error) {
      console.log(error);
      return res.redirect("/admin");
    }
  }
  async create(req, res, next) {
    try {
      const options = {
        title: "ایجاد کلاس جدید",
      };
      return res.render("./admin/Classes/create", {
        options,
        ClientError: req.flash("ClientError"),
      });
    } catch (error) {
      console.log(error);
    }
  }
  async store(req, res, next) {
    const { title } = req.body;
    const findWithTitle = await Classes.findOne({ title });
    if (findWithTitle) {
      req.flash("ClientError", ["این عنوان در سامانه موجود هست"]);
      return res.redirect("/admin/Classes/create");
    }
    const addClasses = new Classes({
      title,
    });
    addClasses.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.redirect("/admin/Classes");
      }
    });
  }
  async update(req, res, next) {
    try {
      const options = {
        title: "ویرایش زبان",
      };
      const { title } = req.params;
      const findClasses = await Classes.findOne({ title });
      if (!findClasses) {
        return res.redirect("/admin/Classess");
      }
      return res.render("./admin/Classes/edit", {
        options,
        Class: findClasses,
        ClientError: req.flash("ClientError"),
      });
    } catch (error) {
      console.log(error);
    }
  }
  async edit(req, res, next) {
    try {
      const { title } = req.body;
      const { titleAddress } = req.params;
      const updateClasses = await Classes.findOneAndUpdate(
        { title: titleAddress },
        { $set: { title } }
      );
      if (updateClasses) {
        return res.redirect("/admin/Classes");
      } else {
        req.flash("ClientError", ["کلاس مورد نظر ویرایش شد"]);
        return res.redirect(`/admin/Classes/${titleAddress}/edit`);
      }
    } catch (error) {
      console.log(error);
      req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
    }
  }
  async classStudents(req, res, next) {
    try {
      const { id } = req.params
      const findClasses = await Classes.findById(id);
      if (!findClasses) {
        return res.redirect("/admin/classes");
      }
      const classeStudents = await ClassRegister.find({
        class: findClasses.id,
      });
      const options = {
        title: "مدیریت دانش آموزان کلاس ها",
      };
      return res.render("./admin/Classes/students", { options, classeStudents });
    } catch (error) {
      console.log(error);
      return res.redirect("/admin");
    }
  }
}

module.exports = new ClassesController();
