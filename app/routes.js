// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { postUser } = require('./controllers/users');
const { verifyFieldUser, existEmail } = require('./middlewares');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [verifyFieldUser, existEmail], postUser);
};
