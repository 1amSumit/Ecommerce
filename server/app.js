const express = require("express");
const app = express();
const productsRoutes = require("./routes/productsRoutes");

app.use(productsRoutes);

module.exports = app;
