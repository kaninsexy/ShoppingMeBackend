const express = require('express')
const router = express.Router()
const OrderAllController = require('../controller/Order')
const passport = require('passport')
const authentication = passport.authenticate('jwt', { session: false })

router.post('/insertOrder', authentication, OrderAllController.inputOrder)
router.get('/', authentication, OrderAllController.getOrder)

module.exports = router