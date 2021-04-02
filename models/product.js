const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    condition: { type: String, required: true },
    imgURL1: { type: String, required: true },
    imgURL2: { type: String, required: false },
    imgURL3: { type: String, required: false },
    details: { type: String, required: true },
    price: { type: String, required: true },
    contactInfo: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('products', Product)