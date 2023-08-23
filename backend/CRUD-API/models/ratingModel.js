const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema(
  {
    roadname: {
      type: String,
      required: [true, "Bitte wähle eine Straße."],
    },
    rating: {
      type: Number,
      required: [true, "Bitte wähle dein Rating."],
      default: 0,
      min: 1, // is this min & max right? I want them to give rating from 1-5
      max: 5,
    },
    comments: {
      type: String,
      required: false,
      maxlength: 100, // is this right? I want to limit the max. amount of characters
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating; // exportiert Rating Modell zu MongoDB?
