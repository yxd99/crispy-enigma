const verifyField = require('./verify-field');
const verifyFieldUser = require('./user');

module.exports = {
  ...verifyField,
  ...verifyFieldUser
};
