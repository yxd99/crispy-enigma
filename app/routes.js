// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { signUp } = require('./controllers/users');
const { validateSignUpDTO } = require('./middlewares/validators');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [validateSignUpDTO], signUp);
};
