// const controller = require('./controllers/controller');
const redoc = require('redoc-express');
const { healthCheck } = require('./controllers/healthCheck');
const { signUp, signIn, listUsers } = require('./controllers/users');
const {
  validateSignUpDTO,
  validateSignInDTO,
  validateGetUsersDTO
} = require('./middlewares/validators/user');
const { jsonSwagger } = require('./controllers/documentation');

exports.init = app => {
  app.get('/docs/swagger', jsonSwagger);
  app.get('/docs', redoc({ title: 'API docs', specUrl: '/docs/swagger' }));
  app.get('/health', healthCheck);
  app.get('/users', [validateGetUsersDTO], listUsers);
  app.post('/users', [validateSignUpDTO], signUp);
  app.post('/users/sessions', [validateSignInDTO], signIn);
};
