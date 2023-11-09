'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const addCustomer = [
      {
        customer_name: "Terasa",
        email: "terasabeauty@gmail.com",
        no_handphone:"085246789341",
        address: "Jalan Pedurungan Kidul 32, Semarang",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        customer_name: "Larissa",
        email: "larissaskin@gmail.com",
        no_handphone:"081356789390",
        address: "Jalan Dr Sudarso 2, Semarang",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('customers', addCustomer, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
