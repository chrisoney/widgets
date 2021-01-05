'use strict';
const bcrypt = require('bcryptjs');
const faker = require('faker');

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
  let users = [
    {
      username: 'chris',
      email: 'chris@chris.com',
      hashedPassword: password,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'demo',
      email: 'demo@demo.com',
      hashedPassword: password,
      createdAt: new Date(),
      updatedAt: new Date(),
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
  ];
  
  for (let i = 5; i <45; i++){
    let newUser = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      hashedPassword: await bcrypt.hash(`password${i}`, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    users.push(newUser);
  }
  return queryInterface.bulkInsert('Users', users, {});
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
