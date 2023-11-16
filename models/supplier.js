'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    static associate(models) {
      Supplier.hasMany(models.Transaction, {
        foreignKey: 'id_supplier'
      });
    }
  }
  Supplier.init({
    supplier_name: DataTypes.STRING,
    email: DataTypes.STRING,
    no_handphone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};
