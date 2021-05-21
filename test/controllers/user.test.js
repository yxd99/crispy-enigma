/* eslint-disable global-require */
const { response } = require('express');
const { signUp } = require('../../app/controllers/users');

describe('User service', () => {
  const req = {
    body: {
      first_name: 'Yesid',
      last_name: 'Hernandez',
      email: 'yesid@wolox.com',
      password: '12345678'
    }
  };

  it('should register user', async () => {
    const res = await signUp(req, response, next => next);
    console.log(res);
    expect(res).toBeTruthy();
  });
});
