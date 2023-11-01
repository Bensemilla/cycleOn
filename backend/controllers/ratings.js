const Rating = require("../models/ratingModel");
const User = require("../models/User");

//Create a Rating

const createRating = async (req, res) => {
  Rating.findOne({
    roadname: req.body.roadname,
    ratingFromUser: req.user.user.userName,
  }).then((userRating) => {
    if (userRating) {
      res.status(500).json({ msg: "user already rated street" });
      console.log("user already rated street");
      return;
    } else {
      const { roadname, rating, comments, ratingFromUser } = req.body;
      try {
        const Rating1 = new Rating({
          roadname,
          rating,
          comments,
          ratingFromUser: req.user.user.userName,
        });
        Rating1.save(); // rating.save wird autom. asynchron geladen (was autom. asynchron ist findet man in der jwlg. Doku vom Package, hier: Doku von Mongoose) & mit await mache ich es wieder synchron
        res.send(Rating1);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    }
  });
};

//update a Rating

const updateRating = async (req, res) => {
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
};

// Show all ratings for one street

const showRatings = async (req, res) => {
  try {
    const allRatings = await Rating.find({});
    res.json(allRatings);
  } catch (error) {
    res.json(error);
    res.status(500).send(error);
  }
};

//Delete rating

const deleteRating = async (req, res) => {
  const { roadname, rating, comments, id } = req.body;
  try {
    const response = await Rating.findByIdAndDelete(id);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.createRating = createRating;
exports.updateRating = updateRating;
exports.showRatings = showRatings;
exports.deleteRating = deleteRating;
