'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Inventory, {
        foreignKey: 'id_category'
      })
    }
  }
  Category.init({
    category_product: DataTypes.STRING,
    delete_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
