

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.FLOAT,
        amount: DataTypes.FLOAT,
        image: DataTypes.STRING
    }, {
        tableName: "product",
        timestamp: false
    })
    Product.associate = models => {
        Product.belongsToMany(models.Cart, {through:models.Order_Product , foreignKey: "product_id" });
    }
    return Product
}