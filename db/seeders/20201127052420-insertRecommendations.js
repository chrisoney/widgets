'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});

      {
        rating: num,
        review: '',
        userId: num,
        storyId: num,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    */
    return queryInterface.bulkInsert('Recommendations', [
      {
        rating: 5,
        review: 'bretty good',
        userId: 1,
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        userId: 1,
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        review: "Honestly it's a bit cliché. It's good for a read if you're killing time but don't put too much hope in it.",
        userId: 1,
        storyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        userId: 3,
        storyId: 4,
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
    return queryInterface.bulkDelete('Recommendations', null, {});
  }
};
