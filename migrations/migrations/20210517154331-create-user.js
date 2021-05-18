'use strict';

const { USERS_TABLE } = require('../../app/constants');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(USERS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: 'compositeIndex',
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }),
  down: queryInterface => queryInterface.dropTable(USERS_TABLE)
};
