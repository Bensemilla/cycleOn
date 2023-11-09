const User = require("../models/User");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
require("dotenv").config();

// -------- define smpt email settings for verification mail ------------

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
});

// ----------- define function for verification hash creation -----------
const verificationHash = () => crypto.randomBytes(16).toString("hex");

// ------------ USER REGISTRATION ROUTE: -------------

const userRegister = (req, res) => {
  //Check if email already registered

  User.findOne({
    $or: [{ email: req.body.email }, { userName: req.body.userName }],
  }).then((user) => {
    if (user) {
      // respond with a 400 error if email already exists
      return res
        .status(400)
        .json({ error: "email already registered or username already in use" });
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
        date: Date.now(),
        createdAt: Date.now(),
      });
      newUser.save();

      //----------- define mail for email verification -------------
      const mailOptions = {
        from: "cycleon2023@proton.me",
        to: newUser.email,
        subject: "cycleOn email verification",
        text: `Please click the following link to verify your email adress: http://localhost:3000/users/verify?hash=${newUser.verificationHash}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(505).json({ verification: "unable to send email" });
        } else {
          newUser.save();
          return res.status(205).json({ verification: "email sent" });
        }
      });
      res.send(newUser);
    }
  });
};

// ---------- USER LOGIN: ------------

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw Error();
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ user }, process.env.JWT_KEY, {
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
};

// ------------- route for user verification ----------------

const userVerify = async (req, res) => {
  const userHash = req.query.hash;
  User.findOne({ verificationHash: userHash }).then((verifiedUser) => {
    if (verifiedUser) {
      verifiedUser.active = true;
      verifiedUser.verificationHash = undefined;
      verifiedUser.createdAt = undefined;
      verifiedUser.save();
      return res
        .status(220)
        .json({ verification: "User successfully verified" });
    } else {
      return res.status(600).json({ verification: "user not found" });
    }
  });
};

// ------------- route for user deletion ability -----------------

const userDelete = async (req, res) => {
  try {
    const existingUser = await User.findOneAndDelete({
      _id: req.user.user._id,
    });
    if (!existingUser) {
      return res.send("user not found");
    }
    res.send("User deleted");
  } catch (error) {
    console.error(error);
  }
};

exports.userRegister = userRegister;
exports.userLogin = userLogin;
exports.userVerify = userVerify;
exports.userDelete = userDelete;
