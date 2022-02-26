const mongoose = require("mongoose");

const Teacher = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Languages",
    required: true,
  },
  experience: { type: Number, required: true },
  teacherFor: { type: String, required: true },
  profile: { type: String, required: true },
  discreption: { type: String, required: true },
  skillDiscriptions: { type: String, required: true },
  teachingSkills: { type: String, required: true, default: "0" },
  spokenSkills: { type: String, required: true, default: "0" },
  communicationSkills: { type: String, required: true, default: "0" },
  socialSkills: { type: String, required: true, default: "0" },
});

module.exports = mongoose.model("Teachers", Teacher);
