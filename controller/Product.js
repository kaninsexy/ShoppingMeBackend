const db = require("../models")
const {Op} = require('sequelize')

const getAllProduct = async (req, res) => {
    const {name, category} = req.query
    const whereProductName = {}
    if (name) {
        whereProductName.name = {[Op.like] : `%${name}%`}
    }
    const whereObj = {where: {...whereProductName}};
    const productAll = await db.Product.findAll(whereObj)
    res.status(200).send(productAll)
}

const targetCategory = async (req, res) => {
    const targetByCategory = req.body.category
    const targetCategory = await db.Product.findAll({ where: { category: targetByCategory } })
    if (targetCategory) {
        res.status(200).send(targetCategory)
    } else {
        res.status(404).send({ message: "Category is not found" })
    }
}




module.exports = {
    getAllProduct,
    targetCategory
}