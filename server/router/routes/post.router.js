const express = require("express");

const postRouter = express.Router();

postRouter.post("/", httpPostItem);

module.exports = postRouter;
