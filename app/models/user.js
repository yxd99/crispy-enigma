'use strict';
const { DB_TABLE_USER } = require('../../helpers/const-dictionary');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    DB_TABLE_USER,
    {
      firsName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        unique: 'compositeIndex',
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {}
  );
  return User;
};
