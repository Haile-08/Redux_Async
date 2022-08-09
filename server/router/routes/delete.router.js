const express = require("express");
const httpDeleteItem = require("../../controller/delete.controller");

const deleteRouter = express.Router();

deleteRouter.delete("/:id", httpDeleteItem);

module.exports = deleteRouter;
