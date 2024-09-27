import { UserService } from './UserService';

jest.mock('../repositories/UserRepository')
jest.mock('../database', () => {
  intialize: jest.fn()
}
  )

const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {
  const userService = new UserService(mockUserRepository);

  it('Deve incluir um novo usuario', async ()=> {
    mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
      user_id: '12123',
      name: 'Joao',
      email: 'XXXXXXXXXXXXX',
      password: '123'
    }))
    const response = await userService.createUser('joao','joao@joao.com','123')
    expect(mockUserRepository.createUser).toHaveBeenCalled()
    expect(response).toMatchObject({
      user_id: '12123',
      name: 'Joao',
      email: 'XXXXXXXXXXXXX',
      password: '123'
    })
  })
  
})