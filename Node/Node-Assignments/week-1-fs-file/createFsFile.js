const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "Hello.txt");
const data = "Hello, Node.js";

fs.writeFileSync(filePath, data, "utf8", (error) => {
  if (error) {
    console.log("Something isn't working");
  }
});
console.log(`File written succesfully at: ${filePath}`);

const content = fs.readFileSync(filePath, "utf8");
console.log(`File content: ${content}`);
