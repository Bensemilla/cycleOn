const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");
const ratingRoutes = require("./routes/ratings");
const usersRoutes = require("./routes/users");
const appExpress = express();
require("dotenv").config();
appExpress.use(parser.json());
appExpress.use("/rating", ratingRoutes);
appExpress.use("/user", usersRoutes);

// -------- define CORS for frontend connection -----------
const cors = require("cors");
appExpress.use(cors());

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
