import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserControler {

  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = new UserService();
  }

  createUser = (req: Request, res: Response) => {
      const user = req.body;

      if (!user.name) {
        return res.status(400).json({message: 'Bad request:Name obrigatório!'})
      }
      if (!user.email) {
        return res.status(400).json({message: 'Bad request:Email obrigatório!'})
      }
      if (!user.password) {
        return res.status(400).json({message: 'Bad request:Password obrigatório!'})
      }
      this.userService.createUser(user.name, user.email, user.password);
      return res.status(201).json({message: 'Usuário criado'})
  }

  getUser = (request: Request, response: Response) => {
    return response.status(200)
  }

  deleteUser = (req: Request, res: Response) => {
    const user = req.body;

    if (!user.name) {
      return res.status(400).json({message: 'Bad request:Name obrigatório!'})
    }
    console.log('excluindo, user: ' + user.name)
    this.userService.deleteUser(user);
    return res.status(200).json({message: 'Usuário excluído'})
}

}