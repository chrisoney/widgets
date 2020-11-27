'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    book: {
      type: DataTypes.STRING
    },
    chapter: {
      type: DataTypes.STRING
    },
    link: {
      type:DataTypes.STRING
    }
  }, {});
  Story.associate = function(models) {
    const columnMappingOne = { // Story -> User, through Subscription
      through: 'Subscription',
      otherKey: 'userId',
      foreignKey: 'storyId',
      as: 'subscribedStory'
    }
    const columnMappingTwo = { // Story -> User, through Recommendation
      through: 'Recommendation',
      otherKey: 'userId',
      foreignKey: 'storyId',
      as: 'recommendedStory'
    }

    Story.belongsToMany(models.User, columnMappingOne);
    Story.belongsToMany(models.User, columnMappingTwo);
  };
  return Story;
};