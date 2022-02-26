const bcrypt = require("bcrypt");

// MODELS
const Users = require("../../../../models/users");

class userController {
  async indexUsers(req, res, next) {
    const users = await Users.find({});
    const options = {
      title: "مدیریت کاربران",
    };
    return res.render("./admin/UsersManagment/index", { users, options });
  }
  async register(req, res, next) {
    const options = {
      title: "صفحه ی ایجاد کاربر",
    };
    return res.render("./admin/UsersManagment/createUser", {
      options,
      ClientError: req.flash("ClientError"),
    });
  }
  async add(req, res, next) {
    const { username, role, nationalId, password } = req.body;
    const findUser = await Users.findOne({ nationalId });
    if (findUser) {
      req.flash("ClientError", ["کاربری با این کد ملی در وب سایت موجود است"]);
      return res.redirect("/admin/usersmanagment/register");
    } else {
      let salt = bcrypt.genSaltSync(5);
      let hashPass = bcrypt.hashSync(password, salt);
      const addUser = new Users({
        nationalId,
        username,
        role,
        password: hashPass,
      });

      addUser.save((err, data) => {
        if (err) {
          console.log(err);
          req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
          return res.redirect("/admin/usersmanagment/register");
        } else {
          return res.redirect("/admin/usersmanagment");
        }
      });
    }
  }
  async update(req, res, next) {
    const { id } = req.params;
    const User = await Users.findById(id);
    if (!User) {
      return res.redirect("/admin/usersmanagment");
    }

    return res.render("./admin/UsersManagment/editUser", {
      ClientError: req.flash("ClientError"),
      User: User,
    });
  }

  async edit(req, res, next) {
    let { username, password, nationalId, role } = req.body;
    const { id } = req.params;
    const users = await Users.findById(id);
    if (!users) {
      return res.redirect("/admin/users");
    }
    if (password.length > 8) {
      let salt = bcrypt.genSaltSync(5);
      password = bcrypt.hashSync(password, salt);
    } else {
      password = users.password;
    }
    const updateUser = await Users.findByIdAndUpdate(id, {
      $set: { username, password, nationalId, role },
    });
    return res.redirect("/admin/usersmanagment");
  }
}

module.exports = new userController();
