const router = require("express").Router();

// ROUTES
const register = require("./register/index");
const login = require("./login/index");

// MIDDLWARES
const hasLogin = require("../../../../http/middlweares/hasLogin");
router.use("/register", hasLogin.noToken, register);
router.use("/login", hasLogin.noToken, login);

module.exports = router;
