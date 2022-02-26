const router = require("express").Router();

// ROUTES
const faPublic = require("./public/fa/index");
const enPublic = require("./public/en/index");
const admin = require("./admin/index");

// MIDDLWARES
const hasRole = require("../http/middlweares/hasRoles");
const hasLogin = require("../http/middlweares/hasLogin");
// ROTEING
router.use("/fa", faPublic);
router.use("/en", enPublic);

router.use("/admin", hasLogin.hasToken, hasRole(["admin"]), admin);

// 404 error page
router.get('/' , (req,res)=>{
  return res.redirect('/fa')
})
router.use("*", (req, res) => {
  const options = {
    title: "4-0-4",
  };
  return res.render("./layouts/error-404", { options });
});

module.exports = router;
