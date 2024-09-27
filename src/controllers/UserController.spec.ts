import { Request } from 'express'
import { UserService } from '../services/UserService'
import { UserControler } from './UserController'
import { makeMockResponse } from '../__mocks__/mockResponse.mock'

const mockuserService = {
  createUser: jest.fn(),
  deleteUser: jest.fn()
}
jest.mock('../services/UserService', () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return mockuserService
    })
  }
})

describe('UserController', () => {
  
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
  } 
  
  const userController = new UserControler()
  const mockResponse = makeMockResponse()

  it('Deve adicionar um novo usuario', () => {
    const mockRequest = {
      body: {
        name: 'Joao',
        email: 'joao@joao.com',
        password: '1223'
      }
    } as Request
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado'})
  })
  it('Deve excluir um usuario', () => {
    const mockRequest = {
      body: {
        name: 'Joao',
        email: 'joao@joao.com',
        password: '123'
      }
    } as Request
    const mockResponse = makeMockResponse()
    userController.deleteUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário excluído'})
  })

  it('Validar quando nao houver name informado', () => {
    const mockRequest = {
      body: {
        email: 'joao@joao.com',
        password: '123'
      }
    } as Request
    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(400)
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request:Name obrigatório!'})
  })  

  it('Validar quando nao houver password informado', () => {
    const mockRequest = {
      body: {
        name: 'Joao',
        email: 'joao@joao.com',
        password: ''
      }
    } as Request
    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(400)
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request:Password obrigatório!'})
  })  

})