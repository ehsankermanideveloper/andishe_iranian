const mongoose = require("mongoose");

const Schools = mongoose.Schema({
  homePageTitleFa : {
    type : String , default : ""
  },
  homePageTitleEn : {
    type : String , default : ""
  },
  homePageDisFa : {
    type : String , default : ""
  },

  homePageDisEn : {
    type : String , default : ""
  },
  studentNumber: {
    type: Number,
    default: 0,
  },
  classRoomNumber: {
    type: Number,
    default: 0,
  },
  busNumber: {
    type: Number,
    default: 0,
  },
  teachersNumber: {
    type: Number,
    default: 0,
  },
  schoolPhone: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    default: "@@",
  },
  mapFa: {
    type: String,
    default: "",
  },
  mapEn: {
    type: String,
    default: "",
  },
  infoFa : {
    type : String , default : ''
  },
  infoEn : {
    type : String , default : ''
  }
});

module.exports = mongoose.model("Schools", Schools);
