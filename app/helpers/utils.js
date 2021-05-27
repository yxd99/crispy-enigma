const bcryptjs = require('bcryptjs');
const jwt = require('jwt-simple');

const encryptPassword = password => {
  const salt = bcryptjs.genSaltSync();
  const passwordEncrypt = bcryptjs.hashSync(password, salt);
  return passwordEncrypt;
};

const isValidPassword = (password, passwordEncrypted) => bcryptjs.compareSync(password, passwordEncrypted);

const generateToken = payload => jwt.encode(payload, process.env.JWT_KEY_SECRET);

module.exports = {
  encryptPassword,
  isValidPassword,
  generateToken
};
