const mongoose = require("mongoose");

const ClassRegister = mongoose.Schema({
  username: { type: String },
  class: { type: mongoose.Types.ObjectId, ref: "Classes" },
  nationalId: { type: Number, required: true },
  age: { type: Number, required: true },
  fatherName: { type: String, required: true },
  fatherPhoneNumber: { type: String, required: true },
  matherPhoneNumber: { type: String, required: true },
});

module.exports = mongoose.model("ClassRegistere", ClassRegister);

