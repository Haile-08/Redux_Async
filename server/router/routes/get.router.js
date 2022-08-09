const express = require("express");

const getRouter = express.Router();

getRouter.get("/", httpGetItem);

module.exports = getRouter;
