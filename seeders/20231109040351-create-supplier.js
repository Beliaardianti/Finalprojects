'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const addSupplier = [
      {
        supplier_name: "Scarlet Official",
        email: "scarletofficial@gmail.com",
        no_handphone:"082256789341",
        address: "Jalan Putri Emas 22, Jakarta",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        supplier_name: "Implora Store",
        email: "implorastore@gmail.com",
        no_handphone:"081356789390",
        address: "Jalan Jendral Sudirman 7, Jakarta",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('suppliers', addSupplier, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('suppliers', null, {});
  }
};