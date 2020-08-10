const db = require("../models")

const getAllProduct = async (req, res) => {
    const productAll = await db.Product.findAll()
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