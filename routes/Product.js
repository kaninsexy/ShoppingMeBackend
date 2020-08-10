const express = require('express')
const router = express.Router()
const ProductAll = require('../controller/Product')

router.get('/', ProductAll.getAllProduct)
router.get('/findByCategory', ProductAll.targetCategory)


module.exports = router