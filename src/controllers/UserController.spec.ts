import { Request } from 'express'
import { UserService } from '../services/UserService'
import { UserControler } from './UserController'
import { makeMockResponse } from '../__mocks__/mockResponse.mock'

describe('UserController', () => {
  
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn()
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
  it('Deve excluir um usuario', () => {
    const mockRequest = {
      body: {
        name: 'Joao',
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
        email: 'joao@joao.com'
      }
    } as Request
    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(400)
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request:Name obrigatório!'})
  })  
  it('Validar se a funcao getAllUsers foi chamada', () => {
    const mockRequest = {
    } as Request
    const mockResponse = makeMockResponse()
    userController.getAllUsers(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
  })  

})