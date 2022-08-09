const item = require("../model/Schema.model");

async function httpUpdateItem(req, res) {
  const { id } = req.params;

  try {
    const update = await item.findOneAndUpdate(
      { id: `${id}` },
      {
        ...req.body,
      }
    );
    if (!update) {
      return res.status(400).json({ err: "no such item" });
    }

    res.status(200).json(update);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

module.exports = httpUpdateItem;
