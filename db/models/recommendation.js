'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recommendation = sequelize.define('Recommendation', {
    rating: {
      type: DataTypes.INTEGER,
    },
    review: {
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    storyId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Recommendation.associate = function(models) {
    // associations can be defined here
  };
  return Recommendation;
};