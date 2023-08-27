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
      min: 1,
      max: 5,
    },
    comments: {
      type: String,
      required: false,
      maxLength: [
        100,
        "Es können maximal 100 Zeichen genutzt werden. Kürze den Text.",
      ],
    },
  },
  {
    timestamps: true, //mongoose adds timestamp for adding & modification dates
  }
);

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating; // exportiert Rating Modell zu MongoDB (every JS file is a module in node)
