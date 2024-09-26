import { Request } from 'express'
import { UserService } from '../services/UserService'
import { UserControler } from './UserController'
import { makeMockResponse } from '../__mocks__/mockResponse.mock'

describe('UserController', () => {
  
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn()
  } 
  
  const userController = new UserControler(mockUserService as UserService)

  it('Deve adicionar um novo usuario', () => {
    const mockRequest = {
      body: {
        name: 'Joao',
        email: 'joao@joao.com'
      }
    } as Request
    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado'})
  })
})