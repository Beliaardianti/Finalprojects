'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Transaction, {
        foreignKey: 'id_customer'
      });
    }
  }
  Customer.init({
    customer_name: DataTypes.STRING,
    email: DataTypes.STRING,
    no_handphone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
