const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Rating = require("./models/ratingModel");
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
        date: Date.now(),
        createdAt: Date.now(),
      });
      newUser.save();

      //----------- define mail for email verification -------------
      const mailOptions = {
        from: "cycleon2023@proton.me",
        to: newUser.email,
        subject: "cyCleon email verification",
        text: `Please click the following link to verify your email adress: http://localhost:3000/verify?hash=${newUser.verificationHash}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(505).json({ verification: "unable to send email" });
        } else {
          newUser.verificationEmailSent = true;
          newUser.save();
          return res.status(205).json({ verification: "email sent" });
        }
      });
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
});

//rating routes
// whenever I hit the endpoint /rating, this logic will be executed. Routes are equivalent to URL in browser

// POST - Create new rating
appExpress.post("/rating", async (req, res) => {
  const { roadname, rating, comments } = req.body;

  try {
    const Rating1 = new Rating({ roadname, rating, comments });
    await Rating1.save(); // rating.save wird autom. asynchron geladen (was autom. asynchron ist findet man in der jwlg. Doku vom Package, hier: Doku von Mongoose) & mit await mache ich es wieder synchron
    res.send(Rating1);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// PUT - Update rating
appExpress.put("/rating", async (req, res) => {
  const { roadname, rating, comments, id } = req.body;
  try {
    const response = await Rating.findByIdAndUpdate(id, {
      rating: req.body.rating,
      comments: req.body.comments,
    });
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// GET - Show all ratings for every street
appExpress.get("/rating", async (req, res) => {
  try {
    const allRatings = await Rating.find({});
    res.json(allRatings);
  } catch (error) {
    res.json(error);
    res.status(500).send(error);
  }
});

// DELETE - Delete rating

appExpress.delete("/rating", async (req, res) => {
  const { roadname, rating, comments, id } = req.body;
  try {
    const response = await Rating.findByIdAndDelete(id);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

/* 1x zum erstellen(post), 1x zum lesen (get), 1x zum updaten (put), 1x zum löschen (delete)
bei update (put) muss man rausfinden, welches rating geupdated werden soll mittels ID -> findById Funktion */

// starting the app on port 3000
appExpress.listen(3000, (err) => {
  if (err) {
    console.log("Fehler!");
  } else {
    console.log("Server läuft auf localhost:3000");
  }
});
