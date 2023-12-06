const rateLimit = require("express-rate-limit");

const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: "Too many requests, please ty again later.",
  headers: true,
});

module.exports = rateLimitMiddleware;
