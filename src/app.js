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
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

// Feed API - GET /feed - get all the user data from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong.");
  }
});

// Delete user from database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User Deleted Successfully!");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// Update user in database
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = [
      "firstName",
      "lastName",
      "photoUrl",
      "about",
      "age",
      "skills",
      "gender",
    ];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error(" not allowed!");
    }
    // if(data?.skills.length > 10){
    //   throw new Error("Cannot add more than 10 skills.")
    // }
    // await User.findByIdAndUpdate({ _id: userId }, data);
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
      runValidators: true,
    }); // return previous data; can use after for updated data

    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong." + err.message);
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
