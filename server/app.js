const express = require("express");
const app = express();
const cors = require("cors");
const productsRoutes = require("./routes/productsRoutes");

app.use(cors());

app.use(express.json());

app.use(productsRoutes);

module.exports = app;
