"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Admins",
      [
        {
          name: "Deni Caknan",
          email: "P4ris2@gmail.com",
          password: "45678900",
          no_handphone: "083456789341",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Naura Sati",
          email: "L0nd0n@gmail.com",
          password: "45679283",
          no_handphone: "089876789212",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Admins", null, {});
  },
};
