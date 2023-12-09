const fs = require("fs");
const path = require("path");
const pth = path.join(
  path.dirname(process.mainModule.filename),
  "database",
  "listProducts.json"
);
const getPro = (cb) => {
  console.log("cb", cb);
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
      console.log("savd this =>", this);
      pro.push(this);
      fs.writeFile(pth, JSON.stringify(pro), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    console.log("cb fetch =>", cb);
    getPro(cb);
  }
};
