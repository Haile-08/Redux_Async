const express = require("express");

const { loginUser, signUpUser } = require("../../controller/user.controllerx");

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/signup", signUpUser);

module.exports = userRouter;
