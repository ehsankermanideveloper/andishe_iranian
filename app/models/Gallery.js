const mongoose = require("mongoose");
const Gallerys = mongoose.Schema({
  imageDir: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Gallerys", Gallerys);
