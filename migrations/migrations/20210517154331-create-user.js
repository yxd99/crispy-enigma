'use strict';
const { DB_TABLE_USER } = require('../../helpers/const-dictionary');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(DB_TABLE_USER, {
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
  down: queryInterface => queryInterface.dropTable(DB_TABLE_USER)
};
