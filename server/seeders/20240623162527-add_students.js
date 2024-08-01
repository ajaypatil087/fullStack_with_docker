"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Students", [
      {
        id: uuidv4(),
        fullname: "John Doe",
        email: "john@gmail.com",
        department_id: 2,
        semester: "1",
        sex: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: "Larry Johnson",
        email: "larry@gmail.com",
        department_id: 2,
        semester: "1",
        sex: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: "Brian Gorge",
        email: "brian@gmail.com",
        department_id: 3,
        semester: "1",
        sex: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: "Alex Bush",
        email: "alex@gmail.com",
        department_id: 2,
        semester: "1",
        sex: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: "Lara doe",
        email: "lara@gmail.com",
        department_id: 2,
        semester: "1",
        sex: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: "Micheal jackson",
        email: "micheal@gmail.com",
        department_id: 3,
        semester: "1",
        sex: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
