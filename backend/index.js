const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const parser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cryptoJS = require("crypto-js");
const nodemailer = require("nodemailer");
const URL = require("url");

const appExpress = express();
appExpress.use(parser.json());

// -------- define smpt email settings for verification mail ------------

const transporter = nodemailer.createTransport({
  host: "smtp.freesmtpservers.com",
  port: 25,
  secure: false,
});

// ---------- function for user verification check -------------
const verify = () => {
  User.findOne({ verificationEmailSent: false }).then((unverifiedUser) => {
    if (unverifiedUser) {
      const mailOptions = {
        from: "cycleon2023@proton.me",
        to: unverifiedUser.email,
        subject: "cyCleon email verification",
        text: `Please click the following link to verify your email adress: http://localhost:3000/verify?hash=${unverifiedUser.verificationHash}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(505).json({ verification: "unable to send email" });
        } else {
          unverifiedUser.verificationEmailSent = true;
          unverifiedUser.save();
          return res.status(205).json({ verification: "email sent" });
        }
      });
    } else {
      return res
        .status(402)
        .json({ active: "Verification email sent to all users" });
    }
  });
};

// ----------- define function for verification hash creation -----------
const verificationHash = () =>
  require("crypto").randomBytes(16).toString("hex");

// -------------- conect to database and test connection ----------------
mongoose.connect("mongodb://127.0.0.1:27017");
mongoose.connection.on("error", (error) => {
  console.log("DB error!");
});
mongoose.connection.on("connected", () => {
  console.log("Connected to DB!");
});

//-------------- route for server testing ---------------------------

appExpress.get("/testing", (req, res) => {
  res.status(200);
  res.send("All systems functional!");
});

// ------------ USER REGISTRATION ROUTE: -------------

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
        active: false,
        verificationHash: verificationHash(),
        verificationEmailSent: false,
      });
      newUser.save();
      verify();
      return res.status(200).json({ msg: newUser });
    }
  });
});

// ---------- USER LOGIN: ------------

appExpress.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw Error();
    }
    if (bcrypt.compareSync(password, user.password)) {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "User not found" });
  }
});

// ------------- route to check for user verification ----------------

appExpress.post("/verify", (req, res) => {
  const userHash = req.query.hash;
  User.findOne({ verificationHash: userHash }).then((verifiedUser) => {
    if (verifiedUser) {
      verifiedUser.active = true;
      verifiedUser.save();
      return res
        .status(220)
        .json({ verification: "User successfully verified" });
    } else {
      return res.status(600).json({ verification: "user not found" });
    }
  });
});

appExpress.listen(3000, (err) => {
  if (err) {
    console.log("server error!");
  } else {
    console.log("Server running on localhost:3000");
  }
});
