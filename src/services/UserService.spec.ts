import { User, UserService } from './UserService';

describe('UserService', () => {
  const mockDb: User[] = []
  // passa a lista para o servico
  // se passar o mockDb a lista será vazia, caso contrário utilizará o valor da lista no proprio servico
  const userService:  UserService = new UserService(mockDb);
  it('Deve retornar uma lista vazia', () => {
    const users = userService.getAllUsers();
    expect(users).toEqual([]);
  });

  it('Deve adicionar um novo usuario', () => {
    const user = { name: 'John Doe', email:"teste.com" };
    userService.createUser(user);
    const users = userService.getAllUsers();
    expect(users).toContain(user);
  });

  it('Verifica se o console log do metodo foi executado', () => {
    const user = { name: 'John Doe', email:"teste.com" };
    const mockConsole = jest.spyOn(global.console, 'log');
    userService.createUser(user);
    expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb);
  });
})