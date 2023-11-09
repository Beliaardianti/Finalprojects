'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const addInventory= [
      {
        product_name: "Scarlet",
        stock:100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Implora",
        stock:250,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('inventories', addInventory, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('invetories', null, {});
  }
};
