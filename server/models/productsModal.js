const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    requires: [true, "Product should have a name"],
  },
  description: {
    type: String,
    requires: [true, "Product should have a description"],
  },
  price: {
    type: Number,
    requires: [true, "Product should have a price"],
  },
  image: {
    type: String,
    requires: [true, "Product should have a image"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Products = new mongoose.model("Product", productSchema);
module.exports = Products;
