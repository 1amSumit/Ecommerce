const express = require("express");
const productsController = require("../controllers/productsController");
const Router = express.Router();

Router.get("/api/products", productsController.getAllProducts);

module.exports = Router;
