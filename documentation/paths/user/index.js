const signIn = require('./signIn.path');
const signUp = require('./signUp.path');
const getUsers = require('./getUsers.path');

module.exports = {
  ...signIn,
  ...signUp,
  ...getUsers
};
