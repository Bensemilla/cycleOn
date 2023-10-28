const express = require("express");

const JWTAuth = require("../middleware/JWTAuth");
const ratingsController = require("../controllers/ratings");

const router = express.Router();

/*
createRating
updateRating
showRatings
deleteRating
*/

// CREATE /rating

router.post("/", JWTAuth, ratingsController.createRating);

module.exports = router;
