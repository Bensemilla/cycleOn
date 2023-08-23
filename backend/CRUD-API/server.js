const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(8080, () => {
  console.log("API app runs on port 8080");
});

//routes
app.post("/rating", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//connection to mongoDB on local host& print out success/error message when connected
mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
