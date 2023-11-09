'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    const addAdmin = [
      {
        name: "Deni Caknan",
        username: "P4ris222",
        password: "45678900",
        no_handphone:"083456789341",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Naura Sati",
        username: "L0nd0n34",
        password: "45679283",
        no_handphone:"089876789212",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('admins', addAdmin, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', null, {});
  }
};
