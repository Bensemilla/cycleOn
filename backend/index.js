const express = require("express");
const mongoose = require("mongoose");

const appExpress = express();

mongoose.connect("mongodb://127.0.0.1:27017");
mongoose.connection.on("error", (error) => {
  console.log("Mongo Fehler!");
});
mongoose.connection.on("connected", () => {
  console.log("Mongo verbunden!");
});

appExpress.get("/testing", (req, res) => {
  res.status(200);
  res.send("All systems functional!");
});

appExpress.listen(3000, (err) => {
  if (err) {
    console.log("Fehler!");
  } else {
    console.log("Server läuft auf localhost:3000");
  }
});
