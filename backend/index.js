const express = require("express");
const app = express();

app.get("/testing", (req, res) => {
  res.status(200);
  res.send("All systems functional!");
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Fehler!");
  } else {
    console.log("Server läuft.");
  }
});
