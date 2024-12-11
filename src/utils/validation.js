const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName) {
    throw new Error("First Name not valid!");
  }

  if (!lastName) {
    throw new Error("First Name not valid!");
  }

  if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid.");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter strong password.");
  }
};

module.exports = { validateSignUpData };
