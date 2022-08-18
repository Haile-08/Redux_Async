//user login
const loginUser = async (req, res) => {
  res.json({ login: "loged" });
};
//user signup

const signUpUser = async (req, res) => {
  res.json({ signUp: "signd" });
};

module.exports = { loginUser, signUpUser };
