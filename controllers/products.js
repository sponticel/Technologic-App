const Product = require('../models/product')
const db = require('../db/connection')
const User = require('../models/user')
const { findById } = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (product) {
      return res.json(product)
    }
    res.status(404).json({ message: 'Product not found.' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createProduct = async (req, res) => {
  try {
    //get user ID from req body its being passed from the front end to the back end
    const {userId} = req.body //req.body is the object that we're sending from front-end to back-end
    const product = await new Product(req.body)
    await product.save()
    //grab user from database based on user ID (using mongoose method findByID) remember to import User from model file
    const user = await User.findById(userId)
    //after finding user push new product into user.products array 
    user.products.push(product)
    //save user
    await user.save()
    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateProduct = async (req, res) => {
  const { id } = req.params
  await Product.findByIdAndUpdate(id, req.body, { new: true }, (error, product) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' })
    }
    res.status(200).json(product)
  })
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Product.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Product deleted')
    }
    throw new Error('Product not found')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}