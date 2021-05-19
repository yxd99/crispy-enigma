'use strict';

const { USERS_TABLE } = require('../constants');

const UserSchema = (sequelize, DataTypes) => {
  const User = sequelize.define(
    USERS_TABLE,
    {
      firstName: {
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
        validate: {
          isEmail: true
        },
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {}
  );
  // User.associate = models => {
  // associations can be defined here
  // };
  return User;
};

module.exports = UserSchema;
