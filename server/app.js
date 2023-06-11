const express = require("express");
const app = express();
const productsRoutes = require("./routes/productsRoutes");

app.use(express.json());

app.use(productsRoutes);

module.exports = app;
