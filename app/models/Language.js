const mongoose = require("mongoose");

const Language = mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model("Languages", Language);
