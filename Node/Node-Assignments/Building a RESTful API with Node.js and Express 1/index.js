const express = require("express");

const app = express();

app.use(express.json());

const laptops = [
  { id: 1, item: "MacBook Pro", price: 1299.99 },
  { id: 2, item: "Dell XPS 13", price: 999.99 },
  { id: 3, item: "HP Spectre x360", price: 1099.99 },
  { id: 4, item: "Lenovo ThinkPad X1 Carbon", price: 1399.99 },
  { id: 5, item: "Asus ZenBook 14", price: 899.99 },
];

app.get("/products", (req, res) => {
  res.status(200);
  res.json(laptops);
});

app.post("/products", (req, res) => {
  const { item, price } = req.body;

  if (!item || !price) {
    return res.status(400).json({ message: "Item and price are required" });
  }

  const newProduct = {
    id: laptops.length + 1,
    item,
    price,
  };

  laptops.push(newProduct);

  res.status(201);
  res.json({
    message: "Product added",
    product: newProduct,
  });
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = laptops.find((laptop) => laptop.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200);
  res.json(product);
});

app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const { item, price } = req.body;

  const productIndex = laptops.findIndex((laptop) => laptop.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (item !== undefined) {
    laptops[productIndex].item = item;
  }
  if (price !== undefined) {
    laptops[productIndex].price = price;
  }

  res.status(200);
  res.json({
    message: "Product updated",
    product: laptops[productIndex],
  });
});

app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = laptops.findIndex((laptop) => laptop.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  laptops.splice(productIndex, 1);

  res.status(200);
  res.json({ message: "Product deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
