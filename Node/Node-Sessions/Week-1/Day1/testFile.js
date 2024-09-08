const { log } = require("console");
const fs = require("fs");

const data = "hello world";

fs.writeFileSync("example.txt", data, "utf8", (error) => {
  if (error) {
    console.log("Diqka spo bon");
    return;
  }
});
console.log("File written succesfully");
