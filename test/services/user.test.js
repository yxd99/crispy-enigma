/* eslint-disable global-require */
const UserService = require('../../app/services/user');

describe('User service', () => {
  beforeEach(() => {
    const models = require('../../app/models');
    jest.mock('../../app/models');
    const { User } = models;
    User.create.mockImplementationOnce(user => Promise.resolve(user));
  });
  const dataUser = {
    lastName: 'Hernandez',
    firstName: 'Yesid',
    email: 'yesid7@wolox.com.co',
    password: '123456789'
  };

  it('should register user', async () => {
    const { email } = await UserService.signUp(dataUser);
    expect(email).toBe(dataUser.email);
  });

  it('should reject register user', async () => {
    try {
      await UserService.signUp(dataUser);
      await UserService.signUp(dataUser);
    } catch (err) {
      return expect(err.internalCode).toEqual('database_error');
    }
    throw new Error('User must be registered.');
  });

  it('should getting users', async () => {
    for (let i = 0; i < 5; i++) {
      dataUser.email = `yesid${i}@wolox.com.co`;
      await UserService.signUp(dataUser);
    }
    const res = await UserService.getUsers();
    return expect(res.length).toBe(5);
  });

  it('should reject getting users', async () => {
    try {
      await UserService.getUsers('assdad');
    } catch (err) {
      return expect(err.internalCode).toEqual('database_error');
    }
    throw new Error('invalid parameter');
  });

  it('should get a user', async () => {
    await UserService.signUp(dataUser);
    const { firstName } = await UserService.getUser({ email: dataUser.email });
    return expect(firstName).toBe(dataUser.firstName);
  });

  it('should reject when getting a user', async () => {
    try {
      await UserService.getUser('asd');
    } catch (err) {
      return expect(err.internalCode).toBe('database_error');
    }
    throw new Error('invalid parameter');
  });
});
