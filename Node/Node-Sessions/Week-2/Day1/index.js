const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  const filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error loading file");
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end(content);
  });

  //   if (req.method === "GET") {
  //     res.statusCode = 200;
  //     res.end("GET request received\n");
  //   } else if (req.method === "POST") {
  //     res.statusCode = 200;
  //     res.end("POST request received\n");
  //   } else {
  //     res.statusCode = 404;
  //     res.end("Not found\n");
  //   }
});

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001/");
});
