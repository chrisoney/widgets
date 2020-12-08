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
        followerId: num,
        followingId: num,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    */
    return queryInterface.bulkInsert('Follows', [
      {
        followerId: 1,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        followerId: 1,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        followerId: 1,
        followingId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { followerId: 2,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 2,
        followingId: 43,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 2,
        followingId: 23,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 2,
        followingId: 34,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 2,
        followingId: 26,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 3,
        followingId: 25,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 3,
        followingId: 10,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 3,
        followingId: 5,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 3,
        followingId: 19,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 3,
        followingId: 41,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 4,
        followingId: 17,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 4,
        followingId: 5,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 4,
        followingId: 42,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 4,
        followingId: 41,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 4,
        followingId: 23,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 5,
        followingId: 41,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 5,
        followingId: 22,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 5,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 5,
        followingId: 12,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 5,
        followingId: 31,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 6,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 6,
        followingId: 33,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 6,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 6,
        followingId: 23,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 6,
        followingId: 25,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 7,
        followingId: 29,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 7,
        followingId: 5,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 7,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 7,
        followingId: 21,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 7,
        followingId: 25,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 8,
        followingId: 10,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 8,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 8,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 8,
        followingId: 40,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 8,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 9,
        followingId: 8,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 9,
        followingId: 32,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 9,
        followingId: 12,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 9,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 9,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 10,
        followingId: 30,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 10,
        followingId: 29,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 10,
        followingId: 24,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 10,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 10,
        followingId: 11,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 11,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 11,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 11,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 11,
        followingId: 29,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 11,
        followingId: 35,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 12,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 12,
        followingId: 21,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 12,
        followingId: 32,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 12,
        followingId: 29,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 12,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 13,
        followingId: 34,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 13,
        followingId: 24,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 13,
        followingId: 5,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 13,
        followingId: 33,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 13,
        followingId: 29,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 14,
        followingId: 13,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 14,
        followingId: 6,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 14,
        followingId: 24,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 14,
        followingId: 15,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 14,
        followingId: 10,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 15,
        followingId: 4,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 15,
        followingId: 6,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 15,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 15,
        followingId: 12,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 15,
        followingId: 8,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 16,
        followingId: 30,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 16,
        followingId: 33,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 16,
        followingId: 6,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 16,
        followingId: 24,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 16,
        followingId: 40,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 17,
        followingId: 40,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 17,
        followingId: 18,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 17,
        followingId: 4,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 17,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 17,
        followingId: 8,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 18,
        followingId: 26,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 18,
        followingId: 25,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 18,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 18,
        followingId: 6,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 18,
        followingId: 16,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 19,
        followingId: 39,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 19,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 19,
        followingId: 34,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 19,
        followingId: 35,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 19,
        followingId: 12,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 20,
        followingId: 16,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 20,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 20,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 20,
        followingId: 31,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 20,
        followingId: 43,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 21,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 21,
        followingId: 38,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 21,
        followingId: 25,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 21,
        followingId: 4,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 21,
        followingId: 11,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 22,
        followingId: 41,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 22,
        followingId: 28,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 22,
        followingId: 16,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 22,
        followingId: 4,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 22,
        followingId: 33,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 23,
        followingId: 20,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 23,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 23,
        followingId: 19,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 23,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 23,
        followingId: 4,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 24,
        followingId: 34,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 24,
        followingId: 22,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 24,
        followingId: 8,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 24,
        followingId: 35,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 24,
        followingId: 30,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 25,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 25,
        followingId: 38,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 25,
        followingId: 21,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 25,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 25,
        followingId: 32,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 26,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 26,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 26,
        followingId: 6,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 26,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 26,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 27,
        followingId: 29,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 27,
        followingId: 10,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 27,
        followingId: 22,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 27,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 27,
        followingId: 41,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 28,
        followingId: 31,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 28,
        followingId: 23,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 28,
        followingId: 30,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 28,
        followingId: 36,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 28,
        followingId: 38,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 29,
        followingId: 9,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 29,
        followingId: 22,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 29,
        followingId: 24,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 29,
        followingId: 34,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 29,
        followingId: 23,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 30,
        followingId: 18,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 30,
        followingId: 22,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 30,
        followingId: 19,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 30,
        followingId: 33,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 30,
        followingId: 13,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 31,
        followingId: 29,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 31,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 31,
        followingId: 19,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 31,
        followingId: 20,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 31,
        followingId: 8,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 32,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 32,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 32,
        followingId: 20,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 32,
        followingId: 30,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 32,
        followingId: 41,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 33,
        followingId: 22,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 33,
        followingId: 9,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 33,
        followingId: 38,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 33,
        followingId: 28,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 33,
        followingId: 35,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 34,
        followingId: 25,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 34,
        followingId: 11,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 34,
        followingId: 18,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 34,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 34,
        followingId: 6,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 35,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 35,
        followingId: 43,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 35,
        followingId: 38,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 35,
        followingId: 11,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 35,
        followingId: 41,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 36,
        followingId: 11,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 36,
        followingId: 28,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 36,
        followingId: 14,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 36,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 36,
        followingId: 35,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 37,
        followingId: 32,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 37,
        followingId: 11,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 37,
        followingId: 12,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 37,
        followingId: 24,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 37,
        followingId: 20,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 38,
        followingId: 13,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 38,
        followingId: 11,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 38,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 38,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 38,
        followingId: 41,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 39,
        followingId: 32,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 39,
        followingId: 34,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 39,
        followingId: 12,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 39,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 39,
        followingId: 17,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 40,
        followingId: 36,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 40,
        followingId: 26,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 40,
        followingId: 12,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 40,
        followingId: 39,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 40,
        followingId: 25,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 41,
        followingId: 22,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 41,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 41,
        followingId: 16,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 41,
        followingId: 23,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 41,
        followingId: 17,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 42,
        followingId: 7,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 42,
        followingId: 8,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 42,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 42,
        followingId: 27,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 42,
        followingId: 11,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 43,
        followingId: 9,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 43,
        followingId: 30,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 43,
        followingId: 33,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 43,
        followingId: 36,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 43,
        followingId: 20,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 44,
        followingId: 21,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 44,
        followingId: 14,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 44,
        followingId: 37,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 44,
        followingId: 6,
        createdAt: new Date(),
        updatedAt: new Date() },
      { followerId: 44,
        followingId: 25,
        createdAt: new Date(),
        updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Follows', null, {});

  }
};
