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
  await db.Users.create(dataUser)
    .then(() => {
      const msg = `El usuario ${email} se registro satisfactoriamente.`;
      logger.info(msg);
      res.json({ msg });
    })
    .catch(error => {
      logger.error(error);
      res.status(400).json(error.message);
    });
};

module.exports = {
  postUser
};
