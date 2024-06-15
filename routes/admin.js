const express = require("express");
const path = require("path");
const rootDir = require("../uitl/path");
const router = express.Router();

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, res) => {
  const { title } = req.body;
  res.status(201).json({
    title,
  });
});
module.exports = router;
