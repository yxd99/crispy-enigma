const config = require('../config');
const schemas = require('./schemas');
const paths = require('./paths');

const port = config.common.api.port || 8080;

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '0.1.0',
    title: 'WTraining',
    description: 'WTraining',
    termsOfService: '',
    contact: {
      name: 'Wolox',
      email: 'tls@wolox.com.ar',
      url: 'https://www.wolox.com.ar/'
    },
    license: {
      name: 'MIT'
    }
  },
  servers: [
    {
      url: `http://localhost:${port}/`,
      description: 'Local server'
    }
  ],
  security: [],
  tags: [
    {
      name: 'Users',
      description: 'Everything about users'
    }
  ],
  paths,
  components: {
    schemas,
    securitySchemes: {}
  }
};
