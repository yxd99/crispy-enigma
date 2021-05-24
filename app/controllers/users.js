const { logger } = require('express-wolox-logger');
const { errors, statusCodes } = require('../helpers');
const { isValidPassword, generateToken } = require('../helpers/utils');
const { userMapper } = require('../mappers');
const { UserService } = require('../services');

const signUp = async (req, res, next) => {
  try {
    const userDTO = userMapper.signUpDTO(req.body);
    const dataUser = await UserService.getUser({ email: userDTO.email });
    if (dataUser) {
      const msg = {
        response: 'this email is already in use.',
        user: userDTO.email
      };
      throw errors.conflictServer(msg);
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

const signIn = async (req, res, next) => {
  try {
    const userDTO = userMapper.signInDTO(req.body);
    const user = await UserService.getUser({ email: userDTO.email });
    if (!user) {
      throw errors.conflictServer('User is not registered.');
    }
    const confirmPassword = isValidPassword(userDTO.password, user.password);
    if (!confirmPassword) {
      throw errors.accessDenied('Email or password invalid.');
    }
    const userSignInDTO = userMapper.signInResponseDTO(user);
    const token = generateToken(userSignInDTO);
    logger.info({
      email: user.email,
      token,
      message: 'Token generated'
    });
    return res.status(statusCodes.successful).json({ token });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signUp,
  signIn
};
