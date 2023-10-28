const jwt = require("jsonwebtoken");
const env = require("dotenv").config();
const tokenSecret = process.env.JWT_KEY;

const JWTAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, tokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log(user);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = JWTAuth;

/*
module.exports = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.JWT_KEY);
    req.userId = userId;
  }
  next();
};
*/
