/* eslint-disable global-require */
const request = require('supertest');
const app = require('../../app');

describe('sign up users', () => {
  beforeEach(() => {
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
    bad_request: 400,
    conflict: 409
  };
  it('should register user', async done => {
    const res = await request(app)
      .post('/users')
      .send(dataUser);
    expect(res.statusCode).toBe(statusCode.created);
    done();
  });

  it('should register user', async done => {
    await request(app)
      .post('/users')
      .send(dataUser);
    const res = await request(app)
      .post('/users')
      .send(dataUser);
    expect(res.statusCode).toBe(statusCode.conflict);
    done();
  });

  it('should reject email', async done => {
    dataUser.email = 'fyesid.h@gmail.com';
    const res = await request(app)
      .post('/users')
      .send(dataUser);
    expect(res.statusCode).toBe(statusCode.bad_request);
    done();
  });

  it('should reject password', async done => {
    dataUser.email = 'yesid@wolox.com.co';
    dataUser.password = '123';
    const res = await request(app)
      .post('/users')
      .send(dataUser);
    expect(res.statusCode).toBe(statusCode.bad_request);
    done();
  });

  it('should reject fields empty', async done => {
    const res = await request(app)
      .post('/users')
      .send({});
    expect(res.statusCode).toBe(statusCode.bad_request);
    done();
  });
});
