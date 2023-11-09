'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id_transaction: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: "inventories",
          key: "id_inventory"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      id_admin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: "admins",
          key: "id_admin"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      id_supplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: "suppliers",
          key: "id_supplier"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      id_customer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: "customers",
          key: "id_customer"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE
      },
      in_out: {
        type: Sequelize.SMALLINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};