const express = require("express");
const httpGetItem = require("../../controller/get.controller");

const getRouter = express.Router();

getRouter.get("/", httpGetItem);

module.exports = getRouter;
