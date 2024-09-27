import { UserService } from './UserService';
import * as jwt from 'jsonwebtoken'

jest.mock('../repositories/UserRepository')
jest.mock('../database', () => {
  intialize: jest.fn()
})
jest.mock('jsonwebtoken')

const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {
  const userService = new UserService(mockUserRepository);
  const mockUser = {
    user_id: '123456',
    name: 'Joao',
    email: 'XXXXXXXXXXXXX',
    password: '123'
  }

  it('Deve incluir um novo usuario', async ()=> {
    mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
      user_id: '123456',
      name: 'Joao',
      email: 'XXXXXXXXXXXXX',
      password: '123'
    }))
    const response = await userService.createUser('joao','joao@joao.com','123')
    expect(mockUserRepository.createUser).toHaveBeenCalled()
    expect(response).toMatchObject({
      user_id: '123456',
      name: 'Joao',
      email: 'XXXXXXXXXXXXX',
      password: '123'
    })
  })

  it('Deve retornar um token de um usuario', async () => {
    jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mockUser))
    jest.spyOn(jwt, 'sign').mockImplementation(()=>'token')
    const token = await userService.getToken('joao@joao.com','123456')
    expect(token).toBe('token')

    })

    it('Deve retornar um erro, caso nao encontre um usuario', async () => {
      jest.spyOn(userService,'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null))
      await expect(userService.getToken('invalid@invalid.com','12123')).rejects.toThrowError(new Error('Email/password invalid!'))
    })
  
})