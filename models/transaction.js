'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.inventory, {
        foreignKey: 'id_inventory'
      });
      transaction.belongsTo(models.admin, {
        foreignKey: 'id_admin'
      });
      transaction.belongsTo(models.supplier, {
        foreignKey: 'id_supplier'
      });
      transaction.belongsTo(models.customer, {
        foreignKey: 'id_customer'
      });
    }
  }
  transaction.init({
    id_inventory: DataTypes.INTEGER,
    id_admin: DataTypes.INTEGER,
    id_supplier: DataTypes.INTEGER,
    id_customer: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    date: DataTypes.DATE,
    in_out: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};