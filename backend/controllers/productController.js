const productModel = require("../models/productModels");

//getProducts API - /api/v1/products
exports.getProducts = async (req, res, next) => {
  let query=req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: "i"
    }
  }:{}
  const products = await productModel.find(query);
  res.status(200).json({
    success: true,
    message: "getProduct",
    products,
  });
};

//getProducts API - /api/v1/product/:id
exports.getSingleProducts = async (req, res, next) => {
  try {
    const products = await productModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "getSingleProduct",
      products,
    });
  } catch (error) {
    res.status(404).json({
      sucsess: false,
      message: error.message,
    });
  }
};
