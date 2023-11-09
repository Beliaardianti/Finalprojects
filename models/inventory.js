'use strict';
require('dotenv').config();

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      inventory.belongsTo(models.category, {
        foreignKey: 'id_category'
      });
<<<<<<< HEAD
      inventory.hasMany(models.transaction, {
=======
      inventory.hasMany(models.transaksi, {
>>>>>>> 88a43441f63e69b597490657ce7644be0d747104
        foreignKey: 'id_inventory'
      });
    }
  }
  inventory.init({
    id_category: DataTypes.INTEGER,
    id_supplier: DataTypes.INTEGER,
    id_customer: DataTypes.INTEGER,
    id_admin: DataTypes.INTEGER,
<<<<<<< HEAD
    product_name: DataTypes.STRING,
    stock: DataTypes.INTEGER
=======
    nama_product: DataTypes.STRING,
    stok: DataTypes.INTEGER
>>>>>>> 88a43441f63e69b597490657ce7644be0d747104
  }, {
    sequelize,
    modelName: 'inventory',
  });
  return inventory;
};