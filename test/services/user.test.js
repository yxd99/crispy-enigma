/* eslint-disable global-require */
const UserService = require('../../app/services/user');

describe('User service', () => {
  beforeAll(() => {
    const models = require('../../app/models');
    jest.mock('../../app/models');
    const { User } = models;
    User.create.mockImplementationOnce(user => Promise.resolve(user));
  });
  it('should register user', async () => {
    const dataUser = {
      lastName: 'Hernandez',
      firstName: 'Yesid',
      email: 'yesid7@wolox.com.co',
      password: '123456789'
    };
    const { email } = await UserService.signUp(dataUser);
    expect(email).toBe(dataUser.email);
  });

  it('should reject register user', async () => {
    const dataUser = {
      lastName: 'Hernandez',
      firstName: 'Yesid',
      email: 'yesid7@wolox.com.co',
      password: '123456789'
    };
    try {
      await UserService.signUp(dataUser);
      await UserService.signUp(dataUser);
    } catch (err) {
      return expect(err.internalCode).toEqual('database_error');
    }
    throw new Error('User must be registered.');
  });
});
