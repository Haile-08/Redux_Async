const item = require("../model/Schema.model");

async function httpGetItem(req, res) {
  try {
    const items = await item.find({});
    console.log(items);
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = httpGetItem;