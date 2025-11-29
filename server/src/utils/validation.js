const validator = require("validator");
const AppError = require("./error");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName) {
    throw new AppError(429, "First Name not valid!");
  }

  if (!lastName) {
    throw new AppError(429, "Last Name not valid!");
  }

  if (!validator.isEmail(emailId)) {
    throw new AppError(429, "Email is not valid.");
  }

  if (!validator.isStrongPassword(password)) {
    throw new AppError(429, "Please enter strong password.");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "photoUrl",
    "skills",
    "about",
    "gender",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;

};
module.exports = { validateSignUpData, validateEditProfileData };
