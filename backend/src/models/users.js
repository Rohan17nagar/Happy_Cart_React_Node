const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
  },
  email: {
    type: String,
    minlength: 3,
  },
  email: {
    type: String,
    unique: [true, "Email id already exists"],
  },
  phone: {
    type: Number,
    min: 10,
    unique: true,
  },
  address: {
    type: String,
  },
});

//Creating a new Collection in DB.
const User = new mongoose.model("User", userSchema);
module.exports = User;
