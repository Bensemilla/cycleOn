const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();
const JWTAuth = require("../middleware/JWTAuth");

// REGISTER USER /register
router.post("/register", usersController.userRegister);

// LOGIN USER /login
router.post("/login", usersController.userLogin);

// VERIFY USER /verify
router.post("/verify", usersController.userVerify);

// DELETE USER /delete
router.delete("/delete", JWTAuth, usersController.userDelete);

module.exports = router;
