const mongoose = require("mongoose");

const Class = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Classes", Class);
