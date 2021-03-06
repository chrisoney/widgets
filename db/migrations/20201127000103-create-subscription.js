'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Subscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      chapter: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: 'subscriptions_unique',
        references: {
          model: "Users",
          key: "id"
        }
      },
      storyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: 'subscriptions_unique',
        references: {
          model: "Stories",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      uniqueKeys: {
        subscriptions_unique: {
            fields: ['userId', 'storyId']
        }
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Subscriptions');
  }
};