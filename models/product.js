const getDb = require("../uitl/database").getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => console.log(result));
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: prodId })
      .next()
      .then((product) => {
        return product;
      }).catch(err => console.log(err));
  }
}

module.exports = Product;
