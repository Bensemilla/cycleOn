const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

function setPassword(value) {
  return bcrypt.hashSync(value, 10);
}

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    set: setPassword,
  },
  dateOfBirth: {
    type: Date,
  },
  bikeType: {
    type: String,
  },
  date: {
    type: Date,
  },
  active: {
    type: Boolean,
  },
  verificationHash: {
    type: String,
  },
  verified: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
