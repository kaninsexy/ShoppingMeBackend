let id = 1

const db = require('../models')

const getOrder = async(req, res) => {
    const targetOrder = await db.Order_Product.findAll()
    res.status(200).send(targetOrder)
}

const selectOrder = async (req,res) => {
    const {product_id,unit_price,amount} = req.body
    const newOrder = await db.Order_Product.create({
        order_id : id++,
        product_id ,
        unit_price,
        amount
    })
    res.status(201).send(newOrder)
}


module.exports = {
    getOrder,
    selectOrder
}