const { logger } = require('express-wolox-logger');
const { badRequest } = require('../errors');
const UserService = require('../services/user');

const signUp = async (req, res, next) => {
  try {
    const userDTO = req.body;
    const query = { email: userDTO.email };
    const dataUser = await UserService.getUsers(query);
    if (dataUser.length) {
      throw badRequest(`El correo ${query.email} ya está registrado.`);
    }
    const { email } = await UserService.signUp(userDTO);
    const msg = { response: `Se registro el usuario ${email} satisfactoriamente.` };
    logger.info(msg);
    return res.status(201).json(msg);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signUp
};
