const express = require("express");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation.js");
const User = require("../models/user.js");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);

    const {
      firstName,
      lastName,
      password,
      age,
      gender,
      skills,
      photoUrl,
      about,
      emailId,
    } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    // Creating a new instance of the User model
    // const user = new User(userObj);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
      age,
      gender,
      skills,
      photoUrl,
      about,
    });

    await user.save();
    res.send("User Added Successfully!");
  } catch (err) {
    res.status(400).send("Error Saving the User: " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("Invalid Credentials.");
    }
    const isPasswordValid = user.verifyPassword(password);

    if (!isPasswordValid) {
      throw new Error("Invalid Credentials ");
    } else {
      const token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Error Saving the User: " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });

  res.send("Log Out Successfull");
});

module.exports = authRouter;
