const express = require("express");

const postRouter = require("./routes/post.router");
const deleteRouter = require("./routes/delete.router");
const getRouter = require("./routes/get.router");
const updateRouter = require("./routes/update.router");

const api = express.Router();

api.use("/post", postRouter);
api.use("/delete", deleteRouter);
api.use("/get", getRouter);
api.use("/update", updateRouter);

module.exports = api;
