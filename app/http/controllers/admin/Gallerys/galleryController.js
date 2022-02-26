const path = require("path");
const fs = require("fs");

// MODELS
const Gallerys = require("../../../../models/Gallery");

class galleryController {
  async index(req, res, next) {
    const options = {
      title: "مدیریت گالری",
    };
    const gallerys = await Gallerys.find({});
    return res.render("./admin/gallerys/index", { options, gallerys });
  }
  create(req, res, next) {
    const options = {
      title: "مدیریت گالری",
    };
    return res.render("./admin/gallerys/create", {
      options,
      ClientError: req.flash("ClientError"),
    });
  }
  async store(req, res, next) {
    const { imageDir } = req.body;
    const addGallery = new Gallerys({ imageDir });
    addGallery.save((err, data) => {
      if (err) {
        req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
        return res.redirect("/admin/gallerys/create");
      } else {
        return res.redirect("/admin/gallerys");
      }
    });
  }

  async remove(req, res, next) {
    const { id } = req.params;
    const findImageGallerys = await Gallerys.findById(id);
    if (!findImageGallerys) {
      return res.redirect("/admin/gallerys");
    }
    // find image and remove the image
    try {
      const removeSyncImage = await fs.unlinkSync(
        path.resolve(findImageGallerys.imageDir)
      );
    } catch (error) {
      console.log(error);
    }

    const removeImageRecorde = await Gallerys.findByIdAndRemove(
      findImageGallerys.id
    );

    return res.redirect("/admin/gallerys");
  }
}

module.exports = new galleryController();
