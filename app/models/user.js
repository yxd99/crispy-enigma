'use strict';

const { USERS_TABLE } = require('../constants');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    USERS_TABLE,
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
