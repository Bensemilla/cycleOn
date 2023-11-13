const { body } = require("express-validator");

//------ Middleware validates and at the same time sanitizes the input data -----------

const ratingDataValidation = [
  body("roadname")
    .exists()
    .withMessage("Roadname required")
    .isString()
    .withMessage("Name must be a string")
    .escape(),
  body("rating")
    .exists()
    .withMessage("Rating is required")
    .isInt()
    .withMessage("Rating must be an integer")
    .escape(),
  body("comments")
    .exists()
    .isLength({ max: 100 })
    .withMessage("Maximum 100 chracters allowed")
    .optional()
    .isString()
    .withMessage("Comment must be a string")
    .trim()
    .escape(),
];

module.exports = ratingDataValidation;
