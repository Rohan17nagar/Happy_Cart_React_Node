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

router.post("/PostPinProducts", (req, res) => {
  console.log("RQ BODY", req.body);
  const productName = new User(req.body);
  Product.save()
    .then(() => {
      res.status(200);

      console.log("response data..");
      res.send(productName);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
