const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();
const JWTAuth = require("../middleware/JWTAuth");
const userDataValidation = require("../middleware/userDataValidation");
const { query } = require("express-validator");

// REGISTER USER /register
router.post("/register", userDataValidation, usersController.userRegister);

// LOGIN USER /login
router.post("/login", userDataValidation, usersController.userLogin);

// VERIFY USER /verify
router.post(
  "/verify",
  query("hash").isString().trim().escape(),
  usersController.userVerify
);

// DELETE USER /delete
router.delete("/delete", JWTAuth, usersController.userDelete);

module.exports = router;
