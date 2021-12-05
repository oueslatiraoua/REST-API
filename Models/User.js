const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  Profession: String,
});
module.exports = mongoose.model("user", userSchema);
