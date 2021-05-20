// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { signUp } = require('./controllers/users');
const { validators } = require('./middlewares');

const { signUpDTO } = validators.user;

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [signUpDTO], signUp);
};
