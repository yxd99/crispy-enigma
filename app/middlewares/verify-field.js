const { request } = require('express');
const { addError } = require('./error-control-req');

const isEmpty = field => (req, res, next) => {
  const infoUser = req.body;
  if (!infoUser[field]) {
    addError(field, 'Campo requerido.');
  }
  next();
};

const isEmail = (req = request, res, next) => {
  const email = req.body.email || '';
  const pattern = /^[a-z0-9.-]+@\S+$/;
  if (!pattern.test(email)) {
    addError('email', 'No es válido el correo.');
  }
  next();
};

module.exports = {
  isEmpty,
  isEmail
};
