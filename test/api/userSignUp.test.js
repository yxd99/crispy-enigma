/* eslint-disable global-require */
const request = require('supertest');
const app = require('../../app');

describe('sign up users', () => {
  beforeAll(() => {
    const models = require('../../app/models');
    jest.mock('../../app/models');
    const { User } = models;
    User.create.mockImplementationOnce(user => Promise.resolve(user));
  });
  const dataUser = {
    first_name: 'Yesid',
    last_name: 'Hernandez',
    email: 'yesid@wolox.com.co',
    password: '12345678'
  };
  const statusCode = {
    created: 201,
    bad_request: 400
  };
  it('should register user', async () => {
    const user = await request(app)
      .post('/users')
      .send(dataUser);
    expect(user.statusCode).toBe(statusCode.created);
  });
  it('should register user', async () => {
    await request(app)
      .post('/users')
      .send(dataUser);
    const res = await request(app)
      .post('/users')
      .send(dataUser);
    return expect(res.statusCode).toBe(statusCode.bad_request);
  });

  it('should reject email', async () => {
    dataUser.email = 'fyesid.h@gmail.com';
    const res = await request(app)
      .post('/users')
      .send(dataUser);
    expect(res.statusCode).toBe(statusCode.bad_request);
  });

  it('should reject password', async () => {
    dataUser.email = 'yesid@wolox.com.co';
    dataUser.password = '123';
    const res = await request(app)
      .post('/users')
      .send(dataUser);
    expect(res.statusCode).toBe(statusCode.bad_request);
  });

  it('should reject fields empty', async () => {
    const res = await request(app)
      .post('/users')
      .send({});
    expect(res.statusCode).toBe(statusCode.bad_request);
  });
});
