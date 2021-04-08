const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const db = require('../db/connection')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const SALT_ROUNDS = 11
const TOKEN_KEY = 'wowthisisastrongkey'

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = new User({
      username,
      email,
      password_digest
    })

    await user.save()

    const payload = {
      username: user.username,
      email: user.email,
      id: user._id
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        username: user.username,
        email: user.email,
        id: user._id
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(500).json({ error: error.message })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.verify(token, TOKEN_KEY)

    if (payload) {
      res.json(payload)
    }
  } catch (error) {
    res.status(401).send('Not Austhorized')
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getUser = async (req, res) => {
  // Getting the User includes getting all the Users' products
  try {
    const user = await User.findById(req.params.id).populate('products')
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getUserProducts = async (req, res) => {
  // This is specifically only returning the Products of the specified User
  try {
    const user = await User.findById(req.params.id)
    const products = await Product.find({ userId: user.id })
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getUserProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
      res.json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  signUp,
  signIn,
  verify,
  getUsers,
  getUser,
  getUserProducts,
  getUserProduct
}