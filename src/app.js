const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res, next) => {
  const userObj = {
    firstName: "Om",
    lastName: "Keshri",
    emailId: "omkeshri21@gmail.com",
    password: "omkeshri21",
    age: 20,
    gender: "Male",
  };

  // Creating a new instance of the User model
  // const user = new User(userObj);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Added Successfully!");
  } catch (err) {
    res.status(400).send("Error Saving the User: " + err.message);
  }
});

// GET user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });

    if (users.length === 0) {
      res.status(404).send("User not found.");
    }

    res.send(users);

  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

// Feed API - GET /feed - get all the user data from the database
app.get("/feed", async (req, res) => {
  try{
    const users = await User.find({})
    res.send(users)


  }catch(err){
    res.status(400).send("Something went wrong.")
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
    console.log("Database cannot be connected." + err);
  });
