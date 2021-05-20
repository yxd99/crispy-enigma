// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { signUp } = require('./controllers/users');
const { userValidator } = require('./middlewares');

const { verifyFieldUser } = userValidator;

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [verifyFieldUser], signUp);
};
