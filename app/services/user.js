const { Op } = require('sequelize');
const { errors, utils } = require('../helpers');
const db = require('../models');

class UserService {
  static async signUp(user) {
    try {
      user.password = utils.encryptPassword(user.password);
      const userRecord = await db.User.create(user);
      return userRecord;
    } catch (err) {
      throw errors.databaseError(err);
    }
  }

  static async getUsers(params) {
    try {
      const query = params ? { [Op.or]: params } : {};
      const users = await db.User.findAll({ where: query });
      return users;
    } catch (err) {
      throw errors.databaseError(err);
    }
  }

  static async getUser(params = {}) {
    try {
      const user = await db.User.findOne({ where: { [Op.or]: params } });
      return user || { error: 'User is not registered.' };
    } catch (err) {
      throw errors.databaseError(err);
    }
  }
}

module.exports = UserService;
