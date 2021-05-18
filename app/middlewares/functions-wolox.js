const db = require('../models');
const { addError, errorsReq } = require('./error-control-req');

const woloxEmail = (req, res, next) => {
  const { email } = req.body;

  const pattern = /^[a-z0-9.-_]+@[\wolox.com]+.$/;
  if (!pattern.test(email)) {
    addError('email', 'El correo no pertenece al dominio de WOLOX.');
  }
  next();
};

const existEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    const errors = errorsReq;
    return res.status(400).json(errors);
  }
  const infoUser = await db.User.findAll({ where: { email } });
  if (infoUser.length) {
    addError('email', `El correo ${email} ya está registrado.`);
  }
  return next();
};

const lengthField = (field, min = 8) => (req, res, next) => {
  const infoRequest = req.body;
  const fieldRequest = infoRequest[field] || '';
  if (fieldRequest.length < min) {
    addError(field, `La longitud mínima del campo es de ${min} caracteres.`);
  }
  return next();
};

module.exports = {
  woloxEmail,
  existEmail,
  lengthField
};
