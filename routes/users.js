const { Router } = require('express')
const controllers = require('../controllers/users')

const router = Router()

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
// router.post('/change-password', controllers.changePassword)
router.get('/users', controllers.getUsers)
router.get('/users/:id', controllers.getUser)
router.get('/users/:id/products', controllers.getUserProducts)
router.get('/users/:id/products/:productId', controllers.getUserProduct)

module.exports = router