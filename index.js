const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const product = require('./app/routes/products');
mongoose.connect("mongodb://localhost:27017/page", {useNewUrlParser: true,useUnifiedTopology: true});
app.use('/pro',product);
app.listen(3000, function (req, res) {
    console.log("Server started on port 3000");
  });