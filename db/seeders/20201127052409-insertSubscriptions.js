'use strict';
const { tempSubs, currentSubs } = require('../../current.js');
const { Recommendation } = require('../models')
const { Op } = require('../models').Sequelize;


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
        book:'0',
        chapter:'',
        userId: 1,
        storyId: ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    */
    let values = currentSubs;
    let oldArray = await Recommendation.findAll({
      where: {
        userId: {
          [Op.ne]: 1
        }
      }
    })
    for (let i = 0; i < oldArray.length; i++){
      let oldObj = oldArray[i];
      values.push({
        book: `${Math.floor(Math.random() * 5)}`,
        chapter: `${Math.floor(Math.random() * 30)}`,
        userId: oldObj.userId,
        storyId: oldObj.storyId,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Subscriptions', values, {});
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
