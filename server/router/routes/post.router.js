const express = require("express");
const httpPostItem = require("../../controller/post.controller");

const postRouter = express.Router();

postRouter.post("/", httpPostItem);

module.exports = postRouter;
