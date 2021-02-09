'use strict';
module.exports = (sequelize, DataTypes) => {
  const Audiobook = sequelize.define('Audiobook', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  Audiobook.associate = function(models) {
    // associations can be defined here
  };
  return Audiobook;
};