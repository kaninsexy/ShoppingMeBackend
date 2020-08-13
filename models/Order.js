
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        total_price: DataTypes.FLOAT,
    }, {
        tableName: "order"
    })
    Order.associate = models => {
        Order.hasMany(models.HistoryProduct , {foreignKey : "order_id"})
    }
    return Order
}