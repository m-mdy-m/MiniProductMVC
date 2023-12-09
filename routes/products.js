const express = require('express')
const router = express.Router()
const controllersProducts = require('../controllers/product.js')

router.get('/products',controllersProducts.getProducts)

router.post('/add-products', controllersProducts.postProducts)

module.exports = router