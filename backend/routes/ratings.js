const express = require("express");

const JWTAuth = require("../middleware/JWTAuth");
const ratingsController = require("../controllers/ratings");

const router = express.Router();
