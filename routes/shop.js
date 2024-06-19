const express = require("express");
const path = require("path");
const rootDir = require("../uitl/path");
const router = express.Router();

router.get("/", (req, res) => {
  const products = [
    {
      name: "Airpods Wireless Bluetooth Headphones",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality audio and bass audio",
      brand: "Apple",
      category: "Electronics",
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 11 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "Electronics",
      price: 599.99,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
  ];
  res.render("shop", {
    products,
    pageTitle: "Automex",
    path: "/",
    formsCSS: true,
    activeShop: true,
  });
});
module.exports = router;
