const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

const app = express();

app.post("/signup", async (err, req, res, next) => {
  const userObj = {
    firstName: "Om",
    lastName: "Keshri",
    emailId: "omkeshri21@gmail.com",
    password: "omkeshri21",
    age: 20,
    gender: "Male",
  };

  // Creating a new instance of the User model
  const user = new User(userObj);

  try {
    await user.save();
    res.send("User Added Successfully!");
  } catch (err) {
    res.status(400).send("Error Saving the User: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database Connected Successfully!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected.");
  });
