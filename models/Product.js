module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.FLOAT,
      amount: DataTypes.FLOAT,
      image: DataTypes.STRING,
    },
    {
      tableName: 'product',
      timestamps: false,
    }
  );
  Product.associate = (models) => {
    Product.hasMany(models.Cart, { foreignKey: 'product_id' });
    Product.hasOne(models.HistoryProduct, { foreignKey: 'product_id' });
  };
  return Product;
};
