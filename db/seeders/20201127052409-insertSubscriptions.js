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
        book:'0',
        chapter:'',
        userId: 1,
        storyId: ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    */
    return queryInterface.bulkInsert('Subscriptions', [
      {
        book: '0',
        chapter: 'When the Student is Ready, part 1',
        userId: 1,
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: 'Food and Growth',
        userId: 1,
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '7',
        chapter: 'Interlude – The Tribes of Izril',
        userId: 1,
        storyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: 'Rapt',
        userId: 1,
        storyId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '496',
        userId: 1,
        storyId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '124',
        userId: 1,
        storyId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '1370',
        userId: 1,
        storyId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '436',
        userId: 1,
        storyId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '340',
        userId: 1,
        storyId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '64',
        userId: 1,
        storyId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '3',
        chapter: '10',
        userId: 1,
        storyId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '145',
        userId: 1,
        storyId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '4',
        chapter: '24',
        userId: 1,
        storyId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '3',
        chapter: '9',
        userId: 1,
        storyId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: 'Day 180 - Blue',
        userId: 1,
        storyId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '132',
        userId: 1,
        storyId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '113',
        userId: 1,
        storyId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '68',
        userId: 1,
        storyId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '588',
        userId: 1,
        storyId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '20',
        userId: 1,
        storyId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '657',
        userId: 1,
        storyId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '233',
        userId: 1,
        storyId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '75',
        userId: 1,
        storyId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '156',
        userId: 1,
        storyId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '105',
        userId: 1,
        storyId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '644',
        userId: 1,
        storyId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '95',
        userId: 1,
        storyId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '50',
        userId: 1,
        storyId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
        chapter: '56',
        userId: 1,
        storyId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '1',
        chapter: 'epilogue',
        userId: 1,
        storyId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '2',
        chapter: '1',
        userId: 1,
        storyId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'0',
        userId: 1,
        storyId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'38',
        userId: 1,
        storyId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'Selective Attention (2)',
        userId: 1,
        storyId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'26',
        chapter:'14',
        userId: 1,
        storyId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'88',
        userId: 1,
        storyId: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'18',
        userId: 1,
        storyId: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'Loading 0.0',
        userId: 1,
        storyId: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'24',
        userId: 1,
        storyId: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'23',
        userId: 1,
        storyId: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'23',
        userId: 1,
        storyId: 41,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'32',
        userId: 1,
        storyId: 42,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book:'0',
        chapter:'63',
        userId: 1,
        storyId: 43,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book: '0',
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
