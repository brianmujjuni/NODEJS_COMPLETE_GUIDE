const express = require("express");
const path = require("path");
const rootDir = require("../uitl/path");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('shop')
});
module.exports = router;
