const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("You are not logged in. Please login!")
    }

    const decodedObj = await jwt.verify(token, "Dev@Tinder#Om$1234%");

    const { _id } = decodedObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not exist");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error: "+ err.message);
  }
};

module.exports = {
  userAuth,
};
