
module.exports = (sequelize, DataTypes) => {
    const HistoryProduct = sequelize.define("HistoryProduct", {
        product_name : DataTypes.STRING,
        amount : DataTypes.INTEGER,
        price: DataTypes.FLOAT,
        

    }, {
        tableName: "history_product"
    })

    HistoryProduct.associate = models => {
        HistoryProduct.belongsTo(models.User,{foreignKey : 'user_id'})
        HistoryProduct.belongsTo(models.Order,{foreignKey : 'order_id'})
        HistoryProduct.belongsTo(models.Product,{foreignKey : 'product_id'})
    }

    return HistoryProduct
}