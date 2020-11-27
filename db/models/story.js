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
    // associations can be defined here
  };
  return Story;
};