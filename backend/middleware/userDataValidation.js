const { body } = require("express-validator");

//------ Middleware validates and at the same time sanitizes the input data -----------

const userDataValidation = [
  body("name")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a name")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .escape(),
  body("userName")
    .exists({ checkFalsy: true })
    .withMessage("User name is required")
    .isString()
    .withMessage("User name must be a string")
    .trim()
    .escape(),
  body("email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: false })
    .withMessage("Provide a valid email address")
    .trim()
    .escape(),
  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .trim()
    .escape(),
  body("dateOfBirth")
    .optional()
    .isDate()
    .withMessage("Please enter a valid date")
    .trim()
    .escape(),
  body("bikeType")
    .optional()
    .isString()
    .withMessage("Bike type must be a string")
    .trim()
    .escape(),
];

module.exports = userDataValidation;
