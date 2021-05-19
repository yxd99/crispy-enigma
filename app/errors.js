const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.BAD_REQUEST = 'invalid_data';
exports.badRequest = message => internalError(message, exports.BAD_REQUEST);

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);
