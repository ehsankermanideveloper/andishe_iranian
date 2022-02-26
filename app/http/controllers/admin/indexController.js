class indexController {
  index(req, res, next) {
    const options = {
      title: "صفحه ی اصلی",
    };
    return res.render("./admin/index", { options });
  }
}

module.exports = new indexController();
