exports.getProducts = (req, res) => {
  console.log("Products Page");
  res.render("products", { title: "products", path: req.path });
};
exports.postProducts = (req, res) => {
  res.redirect("/");
};
