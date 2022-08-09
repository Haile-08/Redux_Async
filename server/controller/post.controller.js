const item = require("../model/Schema.model");

async function httpPostItem(req, res) {
  const { title, text } = req.body;

  try {
    if (!title || !text) {
      return res.status(400).json({
        err: "missing info",
      });
    }
    const items = await item.create({ title, text });
    return res.status(201).json(items);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

module.exports = httpPostItem;
