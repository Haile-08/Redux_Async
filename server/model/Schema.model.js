const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  text: String,
});

const item = mongoose.model("item", itemSchema);

module.exports = item;
 