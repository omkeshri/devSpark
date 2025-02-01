const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email: " + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Password is not strong");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["Male", "female", "other"].includes(value)) {
          throw new Error("Gender is not valid!");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "url",
      // validate(value){
      //   if(value && !validator.isURL(value)){
      //     throw new Error("Invalid URL")
      //   }
      // }
    },
    about: {
      type: String,
      default: "This is a default about of the user.",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

userSchema.methods.getJWT = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user._id }, "Dev@Tinder#Om$1234%", {
    expiresIn: "1d",
  });
  return token;
};

// userSchema.methods.verifyPassword = async function (passwordInputByUser) {
//   const user = this;
//   const passwordHash = user.password;
//   const isPasswordValid = await bcrypt.compare(
//     passwordInputByUser,
//     passwordHash
//   );
//   return isPasswordValid;
// };
userSchema.methods.verifyPassword = async function (passwordInputByUser) {
  try {
    return await bcrypt.compare(passwordInputByUser, this.password);
  } catch (error) {
    console.error("Error verifying password:", error);
    return false; // Fail-safe return in case of an error
  }
};

// Always start a model with capital letter
// const User = mongoose.model("User", userSchema);

// module.exports = User;

module.exports = mongoose.model("User", userSchema);
