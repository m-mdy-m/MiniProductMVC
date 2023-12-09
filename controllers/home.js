const Product = require("../models/products.js")
exports.getHome = (req, res) => {
  Product.fetchAll(pro =>{
    console.log('Home Page');
    res.render("home", { title: "Home", path: req.path });
  })
};
