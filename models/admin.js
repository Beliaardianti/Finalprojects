"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Admin extends Model {
    static associate(models) {
      Admin.hasMany(models.Transaction, {
        foreignKey: "id_admin",
      });
    }
  }
  Admin.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      no_handphone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
