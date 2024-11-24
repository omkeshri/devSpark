const express = require("express");

const app = express();

app.use("/home", (req, res) => {
  res.send("Hello World from Dashboard!");
});

app.use("/contact", (req, res) => {
  res.send("Hello World from Contact!");
});

app.use("/services", (req, res) => {
  res.send("Hello World from Services!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
