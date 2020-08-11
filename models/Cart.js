

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        amount : DataTypes.INTEGER
       
    }, {
        tableName: "cart"
    })
    Cart.associate = models => {
        Cart.belongsTo(models.User, { foreignKey: "user_id" });
        Cart.belongsTo(models.Product, { foreignKey: "product_id" });
    }
    return Cart
}