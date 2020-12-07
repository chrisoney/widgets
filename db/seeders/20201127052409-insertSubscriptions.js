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
        book:'book',
        chapter:'chapter',
        userId: num,
        storyId: num,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    */
    return queryInterface.bulkInsert('Subscriptions', [
      {
        book:'7',
        chapter:'Interlude – The Tribes of Izril',
        userId: 1,
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '335',
        userId: 1,
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: 'Food and Growth',
        userId: 1,
        storyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chapter: 'Food and Growth pt.2',
        userId: 2,
        storyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '2',
        chapter: '112',
        userId: 3,
        storyId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '3',
        chapter: '9',
        userId: 1,
        storyId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Subscriptions', null, {});
  }
};
