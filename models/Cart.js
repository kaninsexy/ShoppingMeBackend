// const Order_Product = require("./Order_Product");

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        status: DataTypes.ENUM("SUCCESS", "PENDING"),
        product_name : DataTypes.STRING,
        total_product: DataTypes.FLOAT,
        total_price: DataTypes.FLOAT
    }, {
        tableName: "cart"
    })
    Cart.associate = models => {
        Cart.belongsTo(models.User, { foreignKey: "user_id" });
        Cart.belongsToMany(models.Product, {through : models.Order_Product , foreignKey: "cart_id" });
        
    }
    return Cart
}