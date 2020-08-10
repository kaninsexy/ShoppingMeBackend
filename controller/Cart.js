let id = 1

const db = require('../models')

const getOrder = async (req, res) => {
    const targetOrder = await db.Cart.findAll()
    res.status(200).send(targetOrder)
}

const selectOrder = async (req, res) => {
    const { total_product, total_price, status, product_name } = req.body
    const newOrder = await db.Cart.create({
        order_id: id++,
        total_product,
        total_price,
        status,
        product_name
    })
        .catch(err => { console.log(err.message) })
    res.status(201).send(newOrder)
}

const updateOrder = async (req, res) => {
    const { total_product, id } = req.body

    const updateOrder = await db.Cart.findOne({ where: { id } })
        .catch(err => (console.log(err.message)))
    if (updateOrder) {
        await updateOrder.update({ total_product })
            .catch(err => (console.log(err.message)))
        res.status(200).send(updateOrder)
    } else {
        res.status(404).send({ message: `Todo ID : ${updateOrder} is not found` })
    }

}

const deleteOrder = async (req, res) => {
    const { id } = req.params
    const targetDelete = await db.Cart.findOne({ where: { id } })
    if (targetDelete) {
        await targetDelete.destroy()
        res.status(204).send({ message: `deleteOrder ID : ${targetDelete} is deleted` })
    }else {
        res.status(404).send({ message: `Todo ID : ${targetTodoId} is not found` })
    }
}




module.exports = {
    getOrder,
    selectOrder,
    updateOrder,
    deleteOrder
}