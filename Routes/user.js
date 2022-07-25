const express = require("express");
const userRouter = express.Router();

const { register, login } = require("../handlers/user");

userRouter.post("/users", register);
userRouter.post("/users/login", login);

module.exports = userRouter;
