const User = require("../models/User");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

// -------- define smpt email settings for verification mail ------------

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
});

// ----------- define function for verification hash creation -----------
const verificationHash = () => crypto.randomBytes(16).toString("hex");

// ------------ USER REGISTRATION ROUTE: -------------

const userRegister = async (req, res) => {
  //Check if email already registered

  try {
    const user = await User.findOne({
      $or: [{ email: req.body.email }, { userName: req.body.userName }],
    });
    if (user) {
      // respond with a 400 error if email already exists
      return res
        .status(400)
        .json({ error: "email already registered or username already in use" });
    }
    // !! -------- check validation results for any errors: ----------!!

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    // !! -------- check for username here ----------- !!
    {
      //create new user
      const newUser = new User({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        bikeType: req.body.bikeType,
        active: false,
        verificationHash: verificationHash(),
        date: Date.now(),
        createdAt: Date.now(),
      });
      newUser.save();

      //----------- define mail for email verification -------------
      const mailOptions = {
        from: process.env.EMAIL_OPTIONS_FROM,
        to: newUser.email,
        subject: process.env.EMAIL_OPTIONS_SUBJECT,
        text: process.env.EMAIL_OPTIONS_TEXT,
        html: `<p>Click <a href="http://localhost:3000/user/verify?hash=${newUser.verificationHash}">here</a> to verify your account.</p>`,
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
  } catch (error) {
    console.error(error);
  }
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
        message: "user logged in successfully",
        user: {
          id: user._id.toString(),
          email: user.email,
          userName: user.userName,
          name: user.name,
          token,
        },
      });
    } else {
      res.status(401).json({ msg: "wrong password" });
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
