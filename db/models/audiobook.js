'use strict';
module.exports = (sequelize, DataTypes) => {
  const Audiobook = sequelize.define('Audiobook', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  Audiobook.associate = function(models) {
    Audiobook.belongsToMany(models.User, {
      through: {
        model: 'Like',
        unique: false,
        scope: {
          likeableType: 'audiobook',
        },
      },
      foreignKey: 'likeableId',
      as: 'likingUsers',
      constraints: false,
    });
  };
  return Audiobook;
};