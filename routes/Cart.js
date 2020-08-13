const express = require('express')
const router = express.Router()
const OrderController = require('../controller/Cart')
const passport = require('passport')
const authentication = passport.authenticate('jwt', { session: false })

router.get('/', authentication, OrderController.getOrder)
router.post('/OrderProduct', authentication, OrderController.selectOrder)
router.put('/', authentication, OrderController.updateOrder)
router.delete('/:id', authentication, OrderController.deleteOrder)
router.delete('/', authentication, OrderController.deleteAllOrder)




module.exports = router
