const express = require('express')
const router = express.Router()
const OrderController = require('../controller/Order')


router.get('/',OrderController.getOrder)
router.post('/selectProduct',OrderController.selectOrder)
// router.delete('/removeProduct',OrderController)

module.exports = router
