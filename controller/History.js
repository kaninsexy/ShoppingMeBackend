const db = require('../models')


const getOrder = async (req, res) => {
    try {
        const order = await db.HistoryProduct.findAll()
        res.status(200).send(order)
    } catch (err) {
        console.log(err.message)
    }
    
}


const inputOrder = async (req, res) => {
    // const {amount, Product :{price,name}} =  req.body;
    // console.log(req.body)
    const newOrders = await db.HistoryProduct.bulkCreate(req.body.history)
    res.status(200).send(newOrders)
}

module.exports = {
    inputOrder, 
    getOrder
}