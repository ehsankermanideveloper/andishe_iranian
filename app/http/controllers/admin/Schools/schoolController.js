// MODUELS
const School = require("../../../../models/School");

class schoolController {
  async update(req, res, next) {
    try {
      const options = {
        title: "ویرایش اطلاعات وب سایت",
      };
      const findSchools = await School.findOne({});
      if (!findSchools) {
        return res.redirect("/admin/");
      }
      return res.render("./admin/Schools/edit", {
        options,
        school: findSchools,
        ClientError: req.flash("ClientError"),
      });
    } catch (error) {
      console.log(error);
    }
  }
  async edit(req, res, next) {
    try {
      const {
        teachersNumber,
        busNumber,
        classRoomNumber,
        studentNumber,
        schoolPhone,
        email,
        mapFa,
        homePageTitleFa,
        homePageDisFa,
        homePageTitleEn,
        homePageDisEn,
        mapEn,
        infoFa,
        infoEn,
      } = req.body;
      const findAndUpdate = await School.findOneAndUpdate(
        {},
        {
          $set: {
            teachersNumber,
            busNumber,
            homePageTitleFa,
            homePageDisFa,
            homePageTitleEn,
            homePageDisEn,
            classRoomNumber,
            studentNumber,
            schoolPhone,
            email,
            mapEn,
            mapFa,
            infoEn,
            infoFa,
          },
        }
      );
      return res.redirect("/admin/school/edit");
    } catch (error) {
      console.log(error);
      req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
      return res.redirect("/admin/school/edit");
    }
  }
}

module.exports = new schoolController();
