const user = require("../model/User.Schema");

//user login
const loginUser = async (req, res) => {
  res.json({ login: "loged" });
};
//user signup

const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await user.signUp(email, password);
    res.status(200).json({ email, User });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signUpUser };
