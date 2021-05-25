/* eslint-disable global-require */
const request = require('supertest');
const app = require('../../app');
const { dataUser, statusCode } = require('../__mocks__/user.mock');

describe('sign up users', () => {
  beforeEach(() => {
    const models = require('../../app/models');
    jest.mock('../../app/models');
    const { User } = models;
    User.create.mockImplementationOnce(user => Promise.resolve(user));
  });
  it('should register user', async done => {
    const res = await request(app)
      .post('/users')
      .send(dataUser.signUp);
    expect(res.statusCode).toBe(statusCode.created);
    done();
  });

  it('should reject register user', async done => {
    await request(app)
      .post('/users')
      .send(dataUser.signUp);
    const res = await request(app)
      .post('/users')
      .send(dataUser.signUp);
    expect(res.statusCode).toBe(statusCode.conflict);
    done();
  });

  it('should reject email', async done => {
    dataUser.signUp.email = 'fyesid.h@gmail.com';
    const res = await request(app)
      .post('/users')
      .send(dataUser.signUp);
    expect(res.statusCode).toBe(statusCode.badRequest);
    done();
  });

  it('should reject password', async done => {
    dataUser.signUp.email = 'yesid@wolox.com.co';
    dataUser.signUp.password = '123';
    const res = await request(app)
      .post('/users')
      .send(dataUser.signUp);
    expect(res.statusCode).toBe(statusCode.badRequest);
    done();
  });

  it('should reject fields empty', async done => {
    const res = await request(app)
      .post('/users')
      .send({});
    expect(res.statusCode).toBe(statusCode.badRequest);
    done();
  });
});
