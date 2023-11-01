const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

// REGISTER USER /register
router.post("/register", usersController.userRegister);

// LOGIN USER /login
router.post("/login", usersController.userLogin);

// VERIFY USER /verify
router.post("/verify", usersController.userVerify);

module.exports = router;
