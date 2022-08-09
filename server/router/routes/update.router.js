const express = require("express");
const httpUpdateItem = require("../../controller/update.controller");

const updateRouter = express.Router();

updateRouter.put("/:id", httpUpdateItem);

module.exports = updateRouter;
