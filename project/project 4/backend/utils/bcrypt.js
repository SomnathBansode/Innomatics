const bcrypt = require("bcryptjs");

// ✅ Define the function only once
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePassword = async (enteredPassword, hashedPassword) => {
  return bcrypt.compare(enteredPassword, hashedPassword);
};

// ✅ Export the functions properly
module.exports = { hashPassword, comparePassword };
