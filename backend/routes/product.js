const express = require("express");
const router = express.Router();
const {
  getProducts,getSingleProducts,
} = require("../controllers/productController");

router.route("/products").get(getProducts);

router.route("/product/:id").get(getSingleProducts);
// router.route("/product/new").post(newProducts);


module.exports = router;
