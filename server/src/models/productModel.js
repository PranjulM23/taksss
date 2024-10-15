const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mrp:{
    type: Number,
    required: true,
  },
  quantity:{
    type: Number,
    required: true,
    default:0
  },
  images: [{
    type: String, 
  }],
});

module.exports = mongoose.model("products", productSchema);
