'use strict';
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
      inventory.hasMany(models.transaction, {
        foreignKey: 'id_inventory'
      });
    }
  }
  inventory.init({
    id_category: DataTypes.INTEGER,
    id_supplier: DataTypes.INTEGER,
    id_customer: DataTypes.INTEGER,
    id_admin: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'inventory',
  });
  return inventory;
};