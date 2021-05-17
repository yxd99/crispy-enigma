'use strict';
const TABLE_USER = process.env.DB_TABLE_USERS;
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    TABLE_USER,
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
  return user;
};
