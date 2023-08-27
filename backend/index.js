const express = require("express");
const mongoose = require("mongoose");
const Rating = require("./models/ratingModel");

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

//rating route
appExpress.post("/rating", (req, res) => {
  console.log(req.body);
  res.send(req.body); // whenever I hit the endpoint /rating, this logic will be executed. Routes are equivalent to URL in browser
});
/* mit Medium Tutorial (kann man autom. email aus user profile ziehen, um Rating in DB direkt mit user zu verknüpfen?):

appExpress.post('/rating', async (req, res) => {
  const { roadname, rating, comments } = req.body;

  try {
    const Rating = new Rating({ roadname, rating, comments });
    await Rating.save();
    res.send(Rating);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

*/

// starting the app on port 3000
appExpress.listen(3000, (err) => {
  if (err) {
    console.log("Fehler!");
  } else {
    console.log("Server läuft auf localhost:3000");
  }
});
