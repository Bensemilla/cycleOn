const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const parser = require("body-parser");

const appExpress = express();
appExpress.use(parser.json());

mongoose.connect("mongodb://127.0.0.1:27017");
mongoose.connection.on("error", (error) => {
  console.log("DB error!");
});
mongoose.connection.on("connected", () => {
  console.log("Connected to DB!");
});

appExpress.get("/testing", (req, res) => {
  res.status(200);
  res.send("All systems functional!");
});

appExpress.listen(3000, (err) => {
  if (err) {
    console.log("server error!");
  } else {
    console.log("Server running on localhost:3000");
  }
});

// ---------- USER REGISTRATION ROUTE: -------------

appExpress.post("/register", (req, res) => {
  //Check if email already registered

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // respond with a 400 error if email already exists
      return res.status(400).json({ email: "email already registered" });
    } else {
      //create new user
      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save();
      return res.status(200).json({ msg: newUser });
    }
  });
});
