const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const parser = require("body-parser");
const ratingRoutes = require("./routes/ratings");
const usersRoutes = require("./routes/users");
const appExpress = express();
const rateLimitMiddleware = require("./middleware/rateLimiter");
const User = require("./models/User");
const cron = require("node-cron");

// -------- define CORS for frontend connection -----------
const cors = require("cors");
appExpress.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

appExpress.use(parser.json());

appExpress.use(rateLimitMiddleware);

appExpress.use("/rating", ratingRoutes);
appExpress.use("/user", usersRoutes);

// ------------- cronjob for unverified user deletion -----------

const ONE_DAY = 1000 * 60 * 60 * 24;

const deleteUnverifiedUsers = async () => {
  console.log("Start user deletion");
  try {
    const response = await User.deleteMany({
      active: false,
      createdAt: { $lt: new Date(Date.now() - ONE_DAY).toISOString() },
    });
    console.log(`${response.deletedCount} users successfully deleted`);
    console.log("test");
  } catch (err) {
    console.log("Unable to delete users" + err);
  }
};
// Schedule cronjob to run every day at 23:00
cron.schedule("0 0 23 * *", () => {
  return deleteUnverifiedUsers();
});

// -------------- conect to database and test connection ----------------

const dbUser = process.env.DATABASE_USER;
const dbPassword = process.env.DATABASE_PASSWORD;
const dbCluster = process.env.DATABASE_CLUSTER;
mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}.57mwgcv.mongodb.net/?retryWrites=true&w=majority`
);
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

// starting the app on port 3000
appExpress.listen(3000, (err) => {
  if (err) {
    console.log("Fehler!");
  } else {
    console.log("Server läuft auf localhost:3000");
  }
});
