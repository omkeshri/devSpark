const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://omkeshri21:zE7cy0E4FJosuyLf@omkeshri.kyee5.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
