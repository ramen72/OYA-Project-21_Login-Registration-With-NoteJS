const mongoose = require("mongoose");
const { Schema } = mongoose;

const registrationSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Registration", registrationSchema);
