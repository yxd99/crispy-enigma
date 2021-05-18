const verifyField = require('./verify-field');
const validateError = require('./error-control-req');
const fnWolox = require('./functions-wolox');

module.exports = {
  ...verifyField,
  ...validateError,
  ...fnWolox
};
