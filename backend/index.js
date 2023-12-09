const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");
require("dotenv").config();
const ratingRoutes = require("./routes/ratings");
const usersRoutes = require("./routes/users");
const appExpress = express();
const rateLimitMiddleware = require("./middleware/rateLimiter");

// -------- define CORS for frontend connection -----------
const cors = require("cors");
appExpress.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

appExpress.use(parser.json());

appExpress.use(rateLimitMiddleware);

appExpress.use("/rating", ratingRoutes);
appExpress.use("/user", usersRoutes);

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
