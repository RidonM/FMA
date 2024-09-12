const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;

  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];

  if (req.method === "GET" && pathname == "/api/users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Gell All users", users }));
  } else if (req.method === "POST" && pathname === "/api/users") {
    console.log("Body", req);
    res.statusCode = 201;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Create a new user" }));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

// give me a simple server that can get a restaurant meny
