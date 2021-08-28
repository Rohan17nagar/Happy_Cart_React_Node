const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productId: {
    type: String,
  },
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

//Creating a new Collection in DB.
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
