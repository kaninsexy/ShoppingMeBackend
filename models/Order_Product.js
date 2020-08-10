
module.exports = (sequelize, DataTypes) => {
    const Order_Product = sequelize.define("Order_Product", {
        status: DataTypes.ENUM("SUCCESS", "PENDING"),
        product_name : DataTypes.STRING,
        total_product: DataTypes.FLOAT,
        total_price: DataTypes.FLOAT
    }, {
        tableName: "order_product"
    })
    // Order_Product.associate = models => {
    //     Product.belongsToMany(models.Cart, { through: models.Product, foreignKey: "cart_id" });
    //     Cart.belongsToMany(models.Product, { through: models.Order_Product, foreignKey: "product_id" });
    // }

    return Order_Product
}