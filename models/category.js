'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category.hasMany(models.inventory, {
        foreignKey: 'id_category'
      })
    }
  }
  category.init({
    category_product: DataTypes.STRING,
    delete_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};