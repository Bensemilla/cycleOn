const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cryptoJS = require("crypto-js");
const Schema = mongoose.Schema;

function setPassword(value) {
  return bcrypt.hashSync(value, 10);
}

const userSchema = new Schema({
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
  age: {
    type: Number,
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
  createdAt: {
    type: Date,
    expires: 60,
  },
});

module.exports = User = mongoose.model("User", userSchema);
