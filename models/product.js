const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    condition: { type: String, required: true },
    images: [{ type: String }],
    details: { type: String, required: true },
    price: { type: String, required: true },
    contactInfo: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('products', Product)