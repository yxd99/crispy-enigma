const signIn = require('./signIn.schema');
const signUp = require('./signUp.schema');
const getUsers = require('./getUsers.schema');

module.exports = {
  ...signIn,
  ...signUp,
  ...getUsers
};
