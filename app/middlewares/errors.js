const logger = require('../logger');

const DEFAULT_STATUS_CODE = 500;

const { statusCode } = require('../helpers');

exports.handle = (error, req, res, next) => {
  if (error.internalCode) res.status(statusCode[error.internalCode] || DEFAULT_STATUS_CODE);
  else {
    // Unrecognized error, notifying it to rollbar.
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  logger.error(error);
  return res.send({ message: error.message, internal_code: error.internalCode });
};
