const { errors } = require('../../helpers');
const { CONFIG_JOI, userSchema } = require('../schemas');

const validateSignUpDTO = (req, res, next) => {
  try {
    const { error } = userSchema.signUp.validate(req.body, CONFIG_JOI);
    if (error) {
      throw errors.badRequest(error.details);
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

const validateSignInDTO = (req, res, next) => {
  try {
    const { error } = userSchema.signIn.validate(req.body, CONFIG_JOI);
    if (error) {
      throw errors.badRequest(error.details);
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

const validateGetUsersDTO = (req, res, next) => {
  try {
    const { error } = userSchema.getUsers.validate(req.query, CONFIG_JOI);
    if (error) {
      throw errors.badRequest(error.details);
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  validateSignUpDTO,
  validateSignInDTO,
  validateGetUsersDTO
};
