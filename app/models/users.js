const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Users = mongoose.Schema({
  username: { type: String },
  password: { type: String, required: true },
  nationalId: { type: Number, required: true },
  role: { type: String, required: true, default: "user" },
});

Users.methods.comparePassword = (password , hashPass) => {
  return bcrypt.compareSync(password, hashPass);
};

module.exports = mongoose.model("users", Users);
