'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  const password = await bcrypt.hash('Hunter12!', 10);
  return queryInterface.bulkInsert('Users', [
    {
      username: 'chris',
      email: 'chris@chris.com',
      hashedPassword: password,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'worry',
      email: 'worry@worry.com',
      hashedPassword: password,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'matt',
      email: 'matt@matt.com',
      hashedPassword: password,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};