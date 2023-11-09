'use strict';
require('dotenv').config();

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      customer.hasMany(models.transaction, {
=======
      customer.hasMany(models.transaksi, {
>>>>>>> 88a43441f63e69b597490657ce7644be0d747104
        foreignKey: 'id_customer'
      });
    }
  }
  customer.init({
<<<<<<< HEAD
    customer_name: DataTypes.STRING,
    email: DataTypes.STRING,
    no_handphone: DataTypes.STRING,
    address: DataTypes.STRING
=======
    nama_customer: DataTypes.STRING,
    email: DataTypes.STRING,
    no_telepon: DataTypes.STRING,
    alamat: DataTypes.STRING
>>>>>>> 88a43441f63e69b597490657ce7644be0d747104
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};