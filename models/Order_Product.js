
module.exports = (sequelize, DataTypes) => {
    const Order_Product = sequelize.define("Order_Product", {
        amount: DataTypes.FLOAT,
        unit_price: DataTypes.FLOAT,
    }, {
        tableName: "order_product"
    })
    return Order_Product
}