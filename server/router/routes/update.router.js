const express = require("express");

const updateRouter = express.Router();

updateRouter.put("/:id", httpPostItem);

module.exports = updateRouter;
