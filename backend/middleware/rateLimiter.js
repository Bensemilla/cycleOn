const rateLimit = require("express-rate-limit");

const rateLimitMiddleware = rateLimit({
  windowMs: 1000,
  max: 1,
  message: "Too many requests, please ty again later.",
  headers: true,
});

module.exports = rateLimitMiddleware;
