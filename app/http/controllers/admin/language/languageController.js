// MODUELS
const e = require("connect-flash");
const Language = require("../../../../models/Language");

class languageController {
  async index(req, res, next) {
    try {
      const languages = await Language.find({});
      const options = {
        title: "مدیریت زبان",
      };

      return res.render("./admin/Language/index", { options, languages });
    } catch (error) {
      console.log(error);
      return res.redirect("/admin");
    }
  }
  async create(req, res, next) {
    try {
      const options = {
        title: "ایجاد زبان جدید",
      };
      return res.render("./admin/Language/create", {
        options,
        ClientError: req.flash("ClientError"),
      });
    } catch (error) {
      console.log(error);
    }
  }
  async store(req, res, next) {
    const { title } = req.body;
    const findWithTitle = await Language.findOne({ title });
    if (findWithTitle) {
      req.flash("ClientError", ["این عنوان در سامانه موجود هست"]);
      return res.redirect("/admin/languages/create");
    }
    const addLanguage = new Language({
      title,
    });
    addLanguage.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.redirect("/admin/languages");
      }
    });
  }
  async update(req, res, next) {
    try {
      const options = {
        title: "ویرایش زبان",
      };
      const { title } = req.params;
      const findLanguage = await Language.findOne({ title });
      if (!findLanguage) {
        return res.redirect("/admin/languages");
      }
      return res.render("./admin/Language/edit", {
        options,
        language : findLanguage,
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
      const updateLanguage = await Language.findOneAndUpdate(
        { title: titleAddress },
        { $set: { title } }
      );
      if (updateLanguage) {
        return res.redirect("/admin/languages");
      } else {
        req.flash("ClientError", ["زبان مورد نظر ویرایش شد"]);
        return res.redirect(`/admin/languages/${titleAddress}/edit`);
      }
    } catch (error) {
      console.log(error);
      req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
    }
  }

  delete(req, res, next) {
    // TODO
  }
}

module.exports = new languageController();
