const user = require("../model/User.Schema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};
//user login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await user.logIn(email, password);
    const token = createToken(User._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//user signup

const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await user.signUp(email, password);
    const token = createToken(User._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signUpUser };
