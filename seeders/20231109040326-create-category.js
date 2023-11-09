'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const addCategory = [
      {
        category_product: "Body Lation",
        createdAt: new Date(),
        updatedAt: new Date(),
        delete_at: new Date()
      },
      {
        category_product: "Sunscreen",
        createdAt: new Date(),
        updatedAt: new Date(),
        delete_at: new Date()
      }
    ]
    return queryInterface.bulkInsert('categories', addCategory, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};