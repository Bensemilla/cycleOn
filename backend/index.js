const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const parser = require("body-parser");
const jwt = require("jsonwebtoken");

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

  User.findOne({
    $or: [{ email: req.body.email }, { userName: req.body.userName }],
  }).then((user) => {
    if (user) {
      // respond with a 400 error if email already exists
      return res
        .status(400)
        .json({ email: "email already registered or username already in use" });
    }
    // !! -------- check for username here ----------- !!
    else {
      //create new user
      const newUser = new User({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        bikeType: req.body.bikeType,
      });
      newUser.save();
      return res.status(200).json({ msg: newUser });
    }
  });
});

// ---------- USER LOGIN: ------------

appExpress.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw Error("User not found");
  }
  if (password === user.password) {
    const token = jwt.sign({ user }, "yourSecretKey", {
      expiresIn: "24h",
    });

    res.json({
      user,
      token,
      message: "user logged in successfully",
    });
  } else {
    res.status(401).json({ msg: "unauthenticated" });
  }
});
