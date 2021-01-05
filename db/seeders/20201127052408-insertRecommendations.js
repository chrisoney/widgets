'use strict';
const { currentRecs } = require('../../current.js');

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
    let values = currentRecs;
    function makeRecommendations (number, user, story, reviews){
      const result = [];
      for (let k = 2; k <= user; k++){
        let stories = [];
        for (let i = 0; i < number; i++){
          let spot = Math.floor(Math.random() * reviews.length)
          let storyId =  Math.floor(Math.random() * story) + 1;
          while (stories.includes(storyId)) storyId =  Math.floor(Math.random() * story) + 1;
          stories.push(storyId);
          let temp = {
            rating: Math.floor(Math.random() * 5) + 1,
            review: reviews[spot],
            userId: k,
            storyId,
            createdAt: new Date(),
            updatedAt: new Date()
          }
          // console.log(temp);
          result.push(temp);
        }
      }
      return result;
    }
    const reviews = ['Great!', 'Sweet!', '', '', '', 'Love it!', 'Meh']
    
    let recArray = makeRecommendations(5, 44, 43, reviews);
    values.push(...recArray);
    return queryInterface.bulkInsert('Recommendations', values, {});
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
