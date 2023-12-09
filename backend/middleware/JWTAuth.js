const jwt = require("jsonwebtoken");
const tokenSecret = process.env.JWT_KEY;

const JWTAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(tokenSecret);
    jwt.verify(token, tokenSecret, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = JWTAuth;
