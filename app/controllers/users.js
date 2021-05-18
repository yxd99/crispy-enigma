const { response } = require('express');
const { logger } = require('express-wolox-logger');
const bcryptjs = require('bcryptjs');
const db = require('../models');

const postUser = async (req, res = response) => {
  const { password, firstName, lastName, email } = req.body;
  const salt = bcryptjs.genSaltSync();
  const dataUser = {
    firstName,
    lastName,
    password: bcryptjs.hashSync(password, salt)
  };
  dataUser.email = email.toLowerCase();
  await db.User.create(dataUser)
    .then(user => {
      logger.info(`El usuario ${email} se creo correctamente.`);
      res.json(user);
    })
    .catch(error => {
      logger.error(error);
    });
};

module.exports = {
  postUser
};
