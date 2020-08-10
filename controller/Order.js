const db = require('../models')


const getOrder = async (req, res) => {
    try {
        const order = await db.Order_Product.findAll()
    } catch (err) {
        console.log(err.message)
    }
    res.status(200).send(order)
}


const inputOrder = async (req, res) => {
    let cart_id = 0
    const order = req.body
    console.log(order)
    const newOrder = await db.Order_Product.create({
        ...order, status: "success", cart_id: cart_id++, product_id: order.id, user_id: 1
    })
    res.status(200).send(newOrder)
}

module.exports = {
    inputOrder, 
    getOrder
}