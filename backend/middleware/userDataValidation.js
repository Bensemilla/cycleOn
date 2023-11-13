const { body } = require("express-validator");

const userDataValidation = [
  body("name")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a name")
    .isString()
    .withMessage("Name must be a string"),
  body("userName")
    .exists({ checkFalsy: true })
    .withMessage("User name is required")
    .isString()
    .withMessage("User name must be a string"),
  body("email").isEmail().withMessage("Provide a valid email address"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("dateOfBirth")
    .optional()
    .isDate()
    .withMessage("Please enter a valid date"),
  body("bikeType")
    .optional()
    .isString()
    .withMessage("Bike type must be a string"),
];

module.exports = userDataValidation;
