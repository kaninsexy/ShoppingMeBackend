let id = 1

const db = require('../models')

const getOrder = async (req, res) => {
    const user_id = req.user.id
    const targetOrder = await db.Cart.findAll({ include: {model: db.Product}})
    res.status(200).send(targetOrder)
}

const selectOrder = async (req, res) => {
    const user_id = req.user.id

    const { amount, product_id } = req.body
    console.log(amount)
    console.log(product_id)
    const newOrder = await db.Cart.create({
        amount,
        product_id,
        user_id
    })

        .catch(err => { console.log(err.message) })
    res.status(201).send(newOrder)
}

const updateOrder = async (req, res) => {
    const { amount, id } = req.body
    console.log(amount)
    // console.log(product_id)
    const updateOrder = await db.Cart.findOne({ where: { id } })
        .catch(err => (console.log(err.message)))

    if (updateOrder) {
        await updateOrder.update({ amount })
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
    } else {
        res.status(404).send({ message: `Todo ID : ${targetTodoId} is not found` })
    }
}

const deleteAllOrder =  (req,res) => {
    console.log("delete aii")
    // const targetDelete = await db.Cart.findAll()
    // if (targetDelete) {
    //     await targetDelete.destroy()
    //     res.status(204).send({ message: `delete Cart: ${targetDelete} is deleted` })
    // } else {
    //     res.status(404).send({ message: `Todo ID : ${targetTodoId} is not found` })
    // }
res.send("delete")
}



module.exports = {
    getOrder,
    selectOrder,
    updateOrder,
    deleteOrder,
    deleteAllOrder
}