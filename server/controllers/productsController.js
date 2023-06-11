const Products = require("../models/productsModal");

exports.getAllProducts = async (req, res, next) => {
  const products = await Products.find();

  res.status(200).json({
    status: "success",
    data: {
      results: products.length,
      products,
    },
  });
};

exports.getProduct = async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!product) {
    return;
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};

exports.createProduct = async (req, res, next) => {
  const product = await Products.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};

exports.updateProduct = async (req, res, next) => {
  const updateProduct = await Products.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.status(200).json({
    status: "success",
    data: {
      updateProduct,
    },
  });
};

exports.deleteProduct = async (req, res, next) => {
  const product = await Products.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    data: null,
  });
};
