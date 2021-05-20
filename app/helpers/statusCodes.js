const errors = require('./errors');

module.exports = {
  successful: 200,
  created: 201,
  [errors.BAD_REQUEST]: 400,
  [errors.DATABASE_ERROR]: 503,
  [errors.DEFAULT_ERROR]: 500
};
