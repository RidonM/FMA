const router = require("express").Router();

router.get("/", (req, res) => {
  res.writeHead(200, "Get all products");
  res.end();
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.writeHead(200, "Get product by id");
  res.end();
});

router.post("/", (req, res) => {
  res.writeHead(200, "Create Product");
  res.end();
});

module.exports = router;
