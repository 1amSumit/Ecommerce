const express = require("express");
const productsController = require("../controllers/productsController");
const Router = express.Router();

Router.route("/api/products")
  .get(productsController.getAllProducts)
  .post(productsController.createProduct);
Router.route("/api/products/:id")
  .get(productsController.getProduct)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = Router;
