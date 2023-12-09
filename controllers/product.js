const Product = require('../models/products.js')
exports.getProducts = (req, res) => {
  console.log("Products Page");
  res.render("products", { title: "products", path: req.path });
};
exports.postProducts = (req, res) => {
  const product = new Product(req.body.title)
  product.saveP()
  res.redirect("/");
};
