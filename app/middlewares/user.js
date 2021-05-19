const { response } = require('express');
const { CONFIG_JOI, schemaUser } = require('./schema');

const verifyFieldUser = (req, res = response, next) => {
  const { error } = schemaUser.validate(req.body, CONFIG_JOI);

  if (error) {
    const errors = error.details;
    return res.status(400).json({ errors });
  }
  return next();
};

module.exports = {
  verifyFieldUser
};
