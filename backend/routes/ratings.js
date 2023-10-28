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

//UPDATE /rating
router.put("/", JWTAuth, ratingsController.updateRating);

//SHOW ALL /rating
router.get("/", ratingsController.showRatings);

//DELETE /rating
router.delete("/", JWTAuth, ratingsController.deleteRating);

module.exports = router;
