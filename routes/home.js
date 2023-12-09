const express = require('express')
const controllersHome = require("../controllers/home.js")
const router = express.Router()
router.get('/', controllersHome.getHome)
module.exports = router