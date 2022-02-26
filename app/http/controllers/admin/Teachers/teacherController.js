const path = require("path");
const fs = require("fs");
// MODELS
const Teachers = require("../../../../models/Teachers");
const Languages = require("../../../../models/Language");

class languageController {
  async index(req, res, next) {
    try {
      const tearchers = await Teachers.find({}).populate([
        { path: "language" },
      ]);
      const options = {
        title: "مدیریت دبیران",
      };
      return res.render("./admin/Teachers/index", { options, tearchers });
    } catch (error) {
      console.log(error);
      return res.redirect("/admin");
    }
  }
  async create(req, res, next) {
    try {
      const options = {
        title: "ایجاد دبیر جدید",
      };
      const languages = await Languages.find({});
      return res.render("./admin/Teachers/create", {
        languages,
        options,
        ClientError: req.flash("ClientError"),
      });
    } catch (error) {
      console.log(error);
    }
  }
  async store(req, res, next) {
    const {
      firstName,
      lastName,
      language,
      experience,
      teacherFor,
      profile,
      discreption,
      skillDiscriptions,
      teachingSkills,
      spokenSkills,
      communicationSkills,
      socialSkills,
    } = req.body;
    const findLanguage = await Languages.findById(language);
    if (!findLanguage) {
      req.flash("ClientError", ["زبان ارسال شده در وب سایت موجود نمی باشد"]);
      return res.redirect("/admin/teachers/create");
    }
    const addTeachers = new Teachers({
      firstName,
      lastName,
      language,
      experience,
      teacherFor,
      profile,
      discreption,
      skillDiscriptions,
      teachingSkills,
      spokenSkills,
      communicationSkills,
      socialSkills,
    });
    addTeachers.save((err, data) => {
      if (err) {
        req.flash("ClientErorr", ["عملیات با موفقیت انجام نشد"]);
        return res.redirect("/admin/teachers/create");
      } else {
        return res.redirect("/admin/teachers");
      }
    });
  }
  async update(req, res, next) {
    try {
      const options = {
        title: "ویرایش اطلاعات دبیر",
      };
      const { id } = req.params;
      const languages = await Languages.find({});
      const teacher = await Teachers.findById(id);
      if (!teacher) {
        return res.redirect("/admin/teachers");
      }
      return res.render("./admin/Teachers/edit", {
        options,
        languages,
        ClientError: req.flash("ClientError"),
        teacher,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async edit(req, res, next) {
    try {
      let {
        firstName,
        lastName,
        language,
        experience,
        teacherFor,
        profile,
        discreption,
        skillDiscriptions,
        teachingSkills,
        spokenSkills,
        communicationSkills,
        socialSkills,
      } = req.body;
      const { id } = req.params;
      const findTeachers = await Teachers.findById(id);

      if (profile !== undefined) {
        try {
          // remove the images
          fs.unlinkSync(path.resolve(findTeachers.profile));
        } catch (error) {
          console.log(error);
          req.flash("ClientError", ["اختلال در ویرایش اطلاعات دبیر"]);
          return res.redirect(`/admin/teachers/${id}/edit`);
        }
      }
      if (profile == undefined) {
        profile = findTeachers.profile;
      }
      findTeachers.update(
        {
          firstName,
          lastName,
          language,
          experience,
          teacherFor,
          profile,
          discreption,
          skillDiscriptions,
          teachingSkills,
          spokenSkills,
          communicationSkills,
          socialSkills,
        },
        (err, data) => {
          if (err) {
            console.log(err);
            req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
            return res.redirect(`/admin/teachers/${id}/edit`);
          } else {
            return res.redirect("/admin/teachers/");
          }
        }
      );
    } catch (error) {
      console.log(error);
      req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
      return res.redirect(`/admin/teachers/${id}/edit`);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    const findTeacher = await Teachers.findById(id);
    if (!findTeacher) {
      return res.redirect("/admin/teachers/");
    }
    // remove profile image
    try {
      fs.unlinkSync(path.resolve(findTeacher.profile));
    } catch (error) {
      console.log(error);
      // return res.redirect("/admin/teachers/");
    }
    // remove the theacers
    const removeTheachers = await Teachers.findByIdAndRemove(findTeacher.id);
    return res.redirect("/admin/teachers/");
  }
}

module.exports = new languageController();
