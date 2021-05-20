const { logger } = require('express-wolox-logger');
const { errors, statusCode } = require('../helpers');
const { userMapper } = require('../mappers');
const { UserService } = require('../services');

const signUp = async (req, res, next) => {
  try {
    const userDTO = userMapper.signUpMapper(req.body);
    const query = { email: userDTO.email };
    const dataUser = await UserService.getUsers(query);
    if (dataUser.length) {
      const msg = {
        response: 'this email is already in use.',
        user: userDTO.email
      };
      throw errors.badRequest(msg);
    }
    const { email } = await UserService.signUp(userDTO);
    const msg = {
      response: 'Successful registration.',
      user: email
    };
    logger.info(msg);
    return res.status(statusCode.created).json(msg);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signUp
};
