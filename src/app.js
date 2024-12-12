const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");

const app = express();

app.use(cookieParser());
app.use(express.json());

const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require('./routes/request')

app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)

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
