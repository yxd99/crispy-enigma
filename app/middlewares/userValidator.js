const { errors } = require('../helpers');
const { CONFIG_JOI, schemaUser } = require('./schema');

const verifyFieldUser = (req, res, next) => {
  try {
    const { error } = schemaUser.validate(req.body, CONFIG_JOI);
    if (error) {
      throw errors.badRequest(error.details);
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  verifyFieldUser
};
