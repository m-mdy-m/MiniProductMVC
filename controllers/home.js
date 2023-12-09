exports.getHome = (req, res) => {
  console.log('Home Page');
  res.render("home", { title: "Home", path: req.path });
};
