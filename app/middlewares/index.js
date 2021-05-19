const verifyField = require('./verify-field');
const validateError = require('./error-control-req');
const fnWolox = require('./functions-wolox');
const verifyFieldUser = require('./user');

module.exports = {
  ...verifyField,
  ...validateError,
  ...fnWolox,
  ...verifyFieldUser
};
