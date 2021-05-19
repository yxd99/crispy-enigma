const { Op } = require('sequelize');
const { databaseError } = require('../errors');
const { encryptPassword } = require('../utils');
const db = require('../models');

class UserService {
  static async signUp(user) {
    user.password = encryptPassword(user.password);
    const userRecord = await db.Users.create(user);
    return userRecord;
  }

  static async getUsers(params = {}) {
    try {
      const users = await db.Users.findAll({ where: { [Op.or]: { ...params } } });
      return users;
    } catch (error) {
      throw databaseError(error);
    }
  }
}

module.exports = UserService;
