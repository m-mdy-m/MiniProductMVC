const fs = require("fs");
const path = require("path");
const pth = path.join(
  path.dirname(process.mainModule.filename),
  "database",
  "listProducts.json"
);
const getPro = (cb) => {
  fs.readFile(pth, (err, data) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  saveP() {
    getPro((pro) => {
      pro.push(this);
      fs.writeFile(pth, JSON.stringify(pro))
    });
  }
  static fetchAll(cb) {
    getPro(cb);
  }
};
