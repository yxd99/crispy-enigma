const db = require('../models');

const woloxEmail = (req, res, next) => {
  const { email } = req.body;
  const pattern = /^[a-zA-Z0-9_.+-]+@(wolox\.com)\.?(ar|co)$/;
  if (!pattern.test(email)) {
    req.errors = { ...req.errors, email: 'El correo no pertenece al dominio de WOLOX.' };
  }
  next();
};

const existEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    const { errors } = req;
    return res.status(400).json(errors);
  }
  const userInfo = await db.Users.findOne({ where: { email } });
  if (userInfo) {
    return res.status(400).json({ email: `El correo ${email} ya está registrado.` });
  }
  return next();
};

const lengthField = (field, min = 8) => (req, res, next) => {
  const infoRequest = req.body;
  const fieldRequest = infoRequest[field] || '';
  if (fieldRequest.length < min) {
    req.errors = { ...req.errors, [field]: `La longitud mínima del campo es de ${min} caracteres.` };
  }
  return next();
};

module.exports = {
  woloxEmail,
  existEmail,
  lengthField
};
