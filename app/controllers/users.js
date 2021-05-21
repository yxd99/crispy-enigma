const { logger } = require('express-wolox-logger');
const { errors, statusCodes } = require('../helpers');
const { userMapper } = require('../mappers');
const { UserService } = require('../services');

const signUp = async (req, res, next) => {
  try {
    const userDTO = userMapper.signUpDTO(req.body);
    const dataUser = await UserService.getUser({ email: userDTO.email });
    if (dataUser !== null) {
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
    return res.status(statusCodes.created).json(msg);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signUp
};
