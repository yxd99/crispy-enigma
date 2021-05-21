// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { signUp, signIn } = require('./controllers/users');
const { validateSignUpDTO, validateSignInDTO } = require('./middlewares/validators/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [validateSignUpDTO], signUp);
  app.post('/users/sessions', [validateSignInDTO], signIn);
};
