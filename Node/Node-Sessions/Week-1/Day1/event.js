const eventEmitter = require("events");
const fs = require("fs");

const myEmitter = new eventEmitter();

function writeFile(title, data) {
  fs.writeFileSync(`${title}.txt`, data, "utf8", (error) => {
    if (err) {
      console.log("Diqka spo bon");
      return;
    }
    console.log("File written succesfully");
  });
}

myEmitter.on("krijofile", () => {
  console.log("Po krijohet nje file");
  writeFile("bota", "sillet rreth dillit");
});

myEmitter.emit("krijofile");
