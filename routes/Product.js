const express = require('express')
const router = express.Router()
const ProductAll = require('../controller/Product')
// const passport = require('passport')
// const authentication = passport.authenticate('jwt', { session: false })

router.get('/', ProductAll.getAllProduct)
router.get('/findByCategory', ProductAll.targetCategory)


module.exports = router