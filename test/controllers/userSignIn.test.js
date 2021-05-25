/* eslint-disable global-require */
const request = require('supertest');
const app = require('../../app');
const { dataUser, statusCode } = require('../__mocks__/user.mock');

describe('sign in user', () => {
  beforeEach(() => {
    const models = require('../../app/models');
    jest.mock('../../app/models');
    const { User } = models;
    User.create.mockImplementationOnce(user => Promise.resolve(user));
  });

  it('should sign in and generate a token.', async done => {
    await request(app)
      .post('/users')
      .send(dataUser.signUp);
    const res = await request(app)
      .post('/users/sessions')
      .send(dataUser.signIn);
    expect(res.statusCode).toBe(statusCode.ok);
    done();
  });

  it('should be rejected because the email is not registered', async done => {
    const res = await request(app)
      .post('/users/sessions')
      .send(dataUser.signIn);
    expect(res.statusCode).toBe(statusCode.unauthorized);
    done();
  });

  it('should be rejected due to wrong password', async done => {
    dataUser.signIn.password = '87654321';
    await request(app)
      .post('/users')
      .send(dataUser.signUp);
    const res = await request(app)
      .post('/users/sessions')
      .send(dataUser.signIn);
    expect(res.statusCode).toBe(statusCode.unauthorized);
    done();
  });

  it('should be rejected because the password is empty', async done => {
    dataUser.signIn = { email: 'yesid@wolox.com.co' };
    await request(app)
      .post('/users')
      .send(dataUser.signUp);
    const res = await request(app)
      .post('/users/sessions')
      .send(dataUser.signUp);
    expect(res.statusCode).toBe(statusCode.badRequest);
    done();
  });

  it('should be rejected because the email is empty', async done => {
    dataUser.signIn = { password: '123456789' };
    await request(app)
      .post('/users')
      .send(dataUser.signUp);
    const res = await request(app)
      .post('/users/sessions')
      .send(dataUser.signUp);
    expect(res.statusCode).toBe(statusCode.badRequest);
    done();
  });

  it('should be rejected because the fields is empty', async done => {
    dataUser.signIn = {};
    await request(app)
      .post('/users')
      .send(dataUser.signUp);
    const res = await request(app)
      .post('/users/sessions')
      .send(dataUser.signUp);
    expect(res.statusCode).toBe(statusCode.badRequest);
    done();
  });
});
