'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    book: {
      type: DataTypes.STRING
    },
    chapter: {
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    storyId: {
      allowNull: false,
      type:DataTypes.INTEGER
    }
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};