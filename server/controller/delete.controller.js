const item = require("../model/Schema.model");

async function httpDeleteItem(req, res) {
  let { id } = req.params;
  try {
    const items = await item.findOneAndDelete({ id: `${id}` });

    if (!items) {
      return res.status(400).json({ err: "no such item" });
    }

    return res.status(200).json(items);
  } catch (err) {
    return res.status(400).json({ err: "no such file" });
  }
}

module.exports = httpDeleteItem;
