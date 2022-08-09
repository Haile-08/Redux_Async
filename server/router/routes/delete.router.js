const express = require("express");

const deleteRouter = express.Router();

deleteRouter.delete("/:id", httpDeleteItem);

module.exports = deleteRouter;
