const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const api = require("./router/api");

const DB_CONNECTION_URL = `mongodb+srv://haile:haile12345@todolist.4dntshl.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err.message);
  });
//must add a paser
app.use(express.json());
app.use("/v1", api);
app.use(cors());
