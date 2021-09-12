const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  mobile: {
    type: String,
  },
});

//Creating a new Collection in DB.
const User = new mongoose.model("User", userSchema);
module.exports = User;
