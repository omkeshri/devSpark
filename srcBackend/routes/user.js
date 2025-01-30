const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const userRouter = express.Router();

userRouter.get("/user/request", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequest = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
      status: "interested",
    });
    res.json({
      message: "Data fetched successfully!",
      data: connectionRequest,
    });
  } catch (err) {
    res.status(400).send("ERROR: " + err);
  }
});

module.exports = userRouter;
