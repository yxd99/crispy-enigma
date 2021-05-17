const { request } = require('express');

const isEmpty = field => (req, res, next) => {
  const infoUser = req.body;
  if (!infoUser[field]) {
    req.errors = { ...req.errors, [field]: 'Campo requerido.' };
  }
  next();
};

const isEmail = (req = request, res, next) => {
  const email = req.body.email || '';
  const pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(email)) {
    req.errors = { ...req.error, email: 'No es válido el correo.' };
  }
  next();
};

module.exports = {
  isEmpty,
  isEmail
};
