exports.getAllProducts = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      products: [{ id: 1, name: "Laptop", price: 12345.9 }],
    },
  });
};
