const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Product=require("../models/product");
router.get("/gproducts", async (req, res) => {
    console.log("hi")
    const options = req.query;
    const products = await Product.paginate({}, options);
    res.json(products);
  });
  
  router.post("/pproducts", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  });
  module.exports=router;