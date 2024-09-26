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
      this.userService.createUser(user);
      return res.status(201).json({message: 'Usuário criado'})
  }

  getAllUsers = (req: Request, res: Response) => {
    const users = this.userService.getAllUsers();
    return res.status(201).json(users)

  }
}