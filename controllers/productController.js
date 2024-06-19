const Product = require("../models/product");
exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/add-product",
    productCSS: true,
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.render("shop", {
    products,
    pageTitle: "Automex",
    path: "/",
    formsCSS: true,
    activeShop: true,
  });
};
