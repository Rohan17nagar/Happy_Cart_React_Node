const express = require("express");
const Product = require("../models/productsModel");
let router = express.Router();

router.use(express.json());

router.get("/GetProductsDetails", (req, res) => {
  Product.find()
    .then((result) => {
      res.status(200).json({
        productData: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

module.exports = router;
