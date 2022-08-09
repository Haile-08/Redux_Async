const { application } = require("express");
const express = require("express");

const api = express.Router();

api.use("/post", httpPostItem);
api.use("/delete", httpDeleteItem);
api.use("/get", httpGetItem);
api.use("/update", httpUpdateItem);

module.exports = api;
