const bcryptjs = require('bcryptjs');

const encryptPassword = password => {
  const salt = bcryptjs.genSaltSync();
  const passwordEncrypt = bcryptjs.hashSync(password, salt);
  return passwordEncrypt;
};

const isValidPassword = pass => pass;

module.exports = {
  encryptPassword,
  isValidPassword
};
