const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ridon123.",
  database: "school",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL");
});

app.post("/students", (req, res) => {
  const { name, age, grade } = req.body;

  const query = "INSERT INTO students (name,age,grade) VALUES (?,?,?)";
  connection.query(query, [name, age, grade], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(201).send("Student created successfully");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
