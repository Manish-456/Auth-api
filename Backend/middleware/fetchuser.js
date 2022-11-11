const jwt = require("jsonwebtoken");

const JWT_SECRET = "shhhhhh";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(400).json({
      msg: "please authenticate using valid token",
    });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    
    req.users = data.user;
    next();
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = fetchuser;
