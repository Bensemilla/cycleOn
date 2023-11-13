const express = require("express");
const JWTAuth = require("../middleware/JWTAuth");
const ratingDataValidation = require("../middleware/ratingDataValidation");
const ratingsController = require("../controllers/ratings");
const router = express.Router();

// CREATE /rating
router.post("/", JWTAuth, ratingDataValidation, ratingsController.createRating);

//UPDATE /rating
router.put("/", JWTAuth, ratingDataValidation, ratingsController.updateRating);

//SHOW ALL /rating
router.get("/", ratingsController.showRatings);

//DELETE /rating
router.delete("/", JWTAuth, ratingsController.deleteRating);

module.exports = router;
