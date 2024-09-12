const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "Get all users" });
});

app.post("/users", (req, res) => {
  res.json({ message: "Create a user" });
});

app.put("/users", (req, res) => {
  res.json({ message: "Update user" });
});

app.delete("/users", (req, res) => {
  res.json({ message: "Delete a user" });
});

app.listen(3001, () => {
  console.log("Server runing on port 3001");
});
