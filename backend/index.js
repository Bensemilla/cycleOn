const express = require("express");
const mongoose = require("mongoose");
const Rating = require("./models/ratingModel");
const bodyParser = require("body-parser");

const appExpress = express();
appExpress.use(bodyParser.json());

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
