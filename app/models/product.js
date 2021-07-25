const mongoose = require('mongoose');
const mongoosePagination=require("mongoose-paginate-v2");


const  productSchema = new mongoose.Schema({
    id:Number,
    name:String,
    price:Number
    
  });
productSchema.plugin(mongoosePagination);
const Product = mongoose.model("Post", productSchema);
module.exports=Product;