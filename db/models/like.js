'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    'Like',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        unique: 'like_unique_constraint',
      },
      likeableId: {
        type: DataTypes.INTEGER,
        unique: 'like_unique_constraint',
        references: null,
      },
      likeableType: {
        type: DataTypes.STRING,
        unique: 'like_unique_constraint',
      },
    },
    {}
  );
  Like.associate = function (models) {
    // associations can be defined here
  };
  return Like;
};
