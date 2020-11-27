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
    */
    return queryInterface.bulkInsert('Stories', [
      {
        title: 'The Wandering Inn',
        book: '7',
        chapter: '60',
        link: 'https://wanderinginn.com/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'He Who Fights With Monsters',
        chapter: '334',
        link: 'https://www.royalroad.com/fiction/26294/he-who-fights-with-monsters',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Worth the Candle',
        chapter: 'Spilled Ink',
        link: 'https://www.royalroad.com/fiction/25137/worth-the-candle',
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
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
