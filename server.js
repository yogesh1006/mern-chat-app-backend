const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running successfully...");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  const result = chats.find((item) => {
    if (item._id === id) {
      return item;
    } else {
      return `No Data Found ${id}`;
    }
  });
  res.json({
    data: result,
    message: "Data received successfully.",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server running on PORT ${PORT}...`));
