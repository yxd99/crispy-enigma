/* eslint-disable global-require */
const UserService = require('../../app/services/user');

describe('User service', () => {
  beforeAll(() => {
    const models = require('../../app/models');
    jest.mock('../../app/models');
    const { User } = models;
    User.create.mockImplementationOnce(user => Promise.resolve(user));
  });
  it('should register user', () => {
    const dataUser = {
      lastName: 'Hernandez',
      firstName: 'Yesid',
      email: 'yesid7@wolox.com.co',
      password: 'AmHt2018Ab'
    };
    const { email } = UserService.signUp(dataUser);
    expect(email).toBe(dataUser.email);
  });
});
