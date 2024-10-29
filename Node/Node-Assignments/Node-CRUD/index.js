const express = require("express");
const db = require("./db.js");
const app = express();

app.use(express.json());

const PAGE_SIZE = 10;

app.get("/products", (req, res) => {
  let page = Math.max(parseInt(req.query.page) || 1, 1);

  const products = db.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (products.length == 0) {
    res.status(404);
    res.end();
  }

  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params["id"]);
  const product = db.products.find((p) => p.id == productId);

  if (!product) {
    res.statusCode(404);
    res.end();
  }

  res.json(product);
});

app.get("/suppliers/products/:id", (req, res) => {
  const id = parseInt(req.params["id"]);
  const product = db.products.filter((p) => p.supplierId == id);
  res.json(product);
});

app.post("/products", (req, res) => {
  const products = db.products;
  const newProduct = req.body;

  newProduct.id = products.length + 1;

  products.push(newProduct);

  res.statusCode = 201;
  res.json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params["id"]);
  const newProduct = req.body;
  const product = db.products;

  product.find((p) => p.id == id);

  product.name = newProduct.name;
  product.price = newProduct.price;
  product.supplierId = newProduct.supplierId;

  res.json(newProduct);
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params["id"]);

  res.json({ message: `Product with id:${id} was deleted succesfully` });
});

app.get("/suppliers", (req, res) => {
  const suppliers = db.suppliers;

  res.json(suppliers);
});

app.get("/suppliers/:id", (req, res) => {
  const supId = parseInt(req.params["id"]);
  const supplier = db.suppliers;

  const suppliers = supplier.find((s) => (s.id = supId));

  res.json(suppliers);
});

app.post("/suppliers", (req, res) => {
  const suppliers = db.suppliers;
  const newSupplier = req.body;

  newSupplier.id = suppliers.length + 1;

  suppliers.push(newSupplier);

  res.statusCode = 201;
  res.json(newSupplier);
});

app.listen(8585);
