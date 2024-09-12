const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;

  const menu = [
    { id: 1, item: "Cheeseburger", price: 9.99 },
    { id: 2, item: "Margherita Pizza", price: 12.99 },
    { id: 3, item: "Caesar Salad", price: 7.99 },
    { id: 4, item: "Grilled Salmon", price: 15.99 },
    { id: 5, item: "Chocolate Lava Cake", price: 6.99 },
  ];

  if (req.method === "GET" && pathname == "/api/menu") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Gell All Foods", menu }));
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

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001/");
});

// give me a simple server that can get a restaurant meny
