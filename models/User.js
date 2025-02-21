const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  company: String,
  age: Number,
  dob: Date,
  profileImage: String, // Image path
});

module.exports = mongoose.model("User", UserSchema);
