const db = require('../models')


const getOrder = async (req, res) => {
    try {
        const order = await db.Order.findAll()
        res.status(200).send(order)
    } catch (err) {
        console.log(err.message)
    }

}


const inputOrder = async (req, res) => {
    const { total_price } = req.body;
    const newOrders = await db.Order.create(
        total_price,
        id
    )
    res.status(200).send(newOrders)
}

module.exports = {
    inputOrder,
    getOrder
}