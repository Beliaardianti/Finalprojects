'use strict';
require('dotenv').config();
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      admin.hasMany(models.transaction, {
=======
      admin.hasMany(models.transaksi, {
>>>>>>> 88a43441f63e69b597490657ce7644be0d747104
        foreignKey: 'id_admin'
      });
    }
  }
  admin.init({
<<<<<<< HEAD
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    no_handphone: DataTypes.STRING
=======
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    no_telepon: DataTypes.STRING
>>>>>>> 88a43441f63e69b597490657ce7644be0d747104
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};