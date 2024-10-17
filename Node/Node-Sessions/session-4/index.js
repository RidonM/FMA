const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Ridon Maliqi");
  res.end();
});

server.listen(3030);
