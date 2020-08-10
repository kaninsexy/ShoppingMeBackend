module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        status: DataTypes.ENUM("SUCCESS", "PENDING"),
        total_product: DataTypes.FLOAT,
        total_price: DataTypes.FLOAT
    }, {
        tableName: "Order"
    })
    Order.associate = models => {
        Order.belongsTo(models.User, { foreignKey: "user_id" })
        Order.belongsToMany(models.Product, { through: models.Order_Product, foreignKey: "order_id" });
    }
    return Order
}