const express = require("express");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation.js");
const User = require("../models/user.js");
const AppError = require("../utils/error.js");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    const existingUser = await User.findOne({ emailId: emailId });
    if (existingUser) {
      throw new AppError(409, "Invalid credentials or user already exist.")
    }

    const passwordHash = await bcrypt.hash(password, 10);
    // console.log(passwordHash);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    const savedUser = await user.save();

    if (!savedUser) {
      throw new AppError(500)
    }

    const token = await savedUser.getJWT();

    const response = {
      name: savedUser?.firstName + ' ' + savedUser?.lastName,
      emailId: savedUser?.emaildId,
    }

    res.cookie("session_token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });

    res.json({ message: "User Added successfully!", data: response });
  } catch (err) {
    console.log(err)
    const status = err.status || 500;
    const message = err.message || "Couldn't create user. Please try again.";
    res.status(status).json({ status: status, message: message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();

      const response = {
        name: user?.firstName + ' ' + user?.lastName,
        emailId: user?.emailId,
      }

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.json({ message: "Login successfull!", data: response });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

authRouter.post("/login/github", )

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });

  res.send("Log Out Successfull!");
});

module.exports = authRouter;
