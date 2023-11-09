'use strict';
require('dotenv').config();

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      supplier.hasMany(models.transaction, {
=======
      supplier.hasMany(models.transaksi, {
>>>>>>> 88a43441f63e69b597490657ce7644be0d747104
        foreignKey: 'id_supplier'
      });
    }
  }
  supplier.init({
<<<<<<< HEAD
    supplier_name: DataTypes.STRING,
    email: DataTypes.STRING,
    no_handphone: DataTypes.STRING,
    address: DataTypes.STRING
=======
    nama_supplier: DataTypes.STRING,
    email: DataTypes.STRING,
    no_telepon: DataTypes.STRING,
    alamat: DataTypes.STRING
>>>>>>> 88a43441f63e69b597490657ce7644be0d747104
  }, {
    sequelize,
    modelName: 'supplier',
  });
  return supplier;
};
