'use strict';
const { currentFollows } = require('../../current.js');
const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    let values = currentFollows;
    // function makeFollows(start, stop, numFollows){
    //   let result = [];
    //   for (let x = start; x <= stop; x++){
    //     let followerId = x;
    //     let followers = [];
    //     for (let y = 0; y < numFollows; y++){
    //       let followingId = Math.floor(Math.random() * stop) + 1;
    //       while(followers.includes(followingId) || x === followingId) {
    //         followingId = Math.floor(Math.random() * stop) + 1
    //       }
    //       followers.push(followingId);
    //       result.push({
    //         followerId: followerId,
    //         followingId: followingId,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       })
    //     }

    //   }
    //   return result;
    // }
    // let numUsers = await User.count();
    // let newFollows = makeFollows(2, numUsers, 5)
    // values.push(...newFollows)
    return queryInterface.bulkInsert('Follows', values, {});
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
