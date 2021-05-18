// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { postUser } = require('./controllers/users');

const { isEmpty, validateErrors, woloxEmail, existEmail, lengthField } = require('./middlewares');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post(
    '/users',
    [
      isEmpty('email'),
      isEmpty('password'),
      isEmpty('firstName'),
      isEmpty('lastName'),
      lengthField('password'),
      woloxEmail,
      existEmail,
      validateErrors
    ],
    postUser
  );
};
