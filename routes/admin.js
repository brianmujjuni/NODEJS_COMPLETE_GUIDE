const express = require("express");
const path = require("path");
const rootDir = require("../uitl/path");
const router = express.Router();

router.get("/add-product", (req, res) => {
  res.render("add-product", { path: "/add-product" });
});

router.post("/product", (req, res) => {
  const { title } = req.body;
  res.status(201).json({
    title,
  });
});
module.exports = router;
