'use strict';
const TABLE_USER = process.env.DB_TABLE_USERS;
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(TABLE_USER, {
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
  down: queryInterface => queryInterface.dropTable(TABLE_USER)
};
