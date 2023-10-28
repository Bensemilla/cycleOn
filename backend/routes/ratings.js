const express = require("express");

const JWTAuth = require("../middleware/JWTAuth");
const ratingsController = require("../controllers/ratings");

const router = express.Router();

/*
createRating
updateRating .put
showRatings .get
deleteRating .delete
*/

// CREATE /rating

router.post("/", JWTAuth, ratingsController.createRating);

router.put("/", JWTAuth, ratingsController.updateRating);

router.get("/", ratingsController.showRatings);

router.delete("/", JWTAuth, ratingsController.deleteRating);

module.exports = router;
