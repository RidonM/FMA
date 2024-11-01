const router = require("express").Router();

router.get("/add", (req, res) => {
  const a = +req.query.a;
  const b = parseInt(req.query.b);

  if (a == undefined || b == undefined || a == NaN || b == NaN) {
    res.send(400).json({
      error: "Please provide valid parameters",
    });
    return;
  }

  const result = a + b;

  res.json({
    a: a,
    b: b,
    operation: "add",
    result: result,
  });
});

router.get("/subtract", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (a == undefined || b == undefined || a == NaN || b == NaN) {
    res.send(400).json({
      error: "Please provide valid parameters",
    });
    return;
  }

  const result = a - b;

  res.json({
    a: a,
    b: b,
    operation: "subtract",
    result: result,
  });
});

router.get("/multiply", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (a == undefined || b == undefined || a == NaN || b == NaN) {
    res.send(400).json({
      error: "Please provide valid parameters",
    });
    return;
  }

  const result = a * b;

  res.json({
    a: a,
    b: b,
    operation: "multiply",
    result: result,
  });
});

router.get("/divide", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (a == undefined || b == undefined || a == NaN || b == NaN) {
    res.send(400).json({
      error: "Please provide valid parameters",
    });
    return;
  }

  if (b == 0) {
    res.sendStatus(400);
    return;
  }

  const result = a / b;

  res.json({
    a: a,
    b: b,
    operation: "divide",
    result: result,
  });
});

router.get("/", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const operation = req.query.operation;
  let result;

  if (a == undefined || b == undefined || a == NaN || b == NaN) {
    res.send(400).json({
      error: "Please provide valid parameters",
    });
    return;
  }

  switch (operation) {
    case "divide":
      if (b == 0) {
        res.status(400).json({ error: "Bad Request" });
        return;
      }
      result = a / b;
      break;
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    default:
      res.status(400).json({ error: "Invalid Operation" });
  }

  res.json({
    a: a,
    b: b,
    operation: operation,
    result: result,
  });
});

module.exports = router;
