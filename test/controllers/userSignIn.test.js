/* eslint-disable global-require */
const request = require('supertest');
const app = require('../../app');

describe('sign in user', () => {
  beforeEach(() => {
    const models = require('../../app/models');
    jest.mock('../../app/models');
    const { User } = models;
    User.create.mockImplementationOnce(user => Promise.resolve(user));
  });
  const dataUser = {
    signUp: {
      first_name: 'Yesid',
      last_name: 'Hernandez',
      email: 'yesid@wolox.com.co',
      password: '12345678'
    },
    signIn: {
      email: 'yesid@wolox.com.co',
      password: '12345678'
    }
  };
  const statusCode = {
    ok: 200,
    badRequest: 400,
    denied: 401,
    conflict: 409
  };

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
    expect(res.statusCode).toBe(statusCode.conflict);
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
    expect(res.statusCode).toBe(statusCode.denied);
    done();
  });

  it('should be rejected because the password is empty', async done => {
    delete dataUser.signIn.password;
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
    delete dataUser.signIn.email;
    dataUser.signIn.password = '123456789';
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
    delete dataUser.signIn.email;
    delete dataUser.signIn.password;
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
