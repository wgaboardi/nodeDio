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

  getUser = async (request: Request, response: Response) => {
    const { userId } = request.params
    if (userId) {
      const user = await this.userService.getUser( userId )
      return response.status(200).json( { 
        userId: user?.user_id,
        name: user?.name,
        email: user?.email

      } )
      }
  }

  deleteUser = (req: Request, res: Response) => {
    const user = req.body;

    if (!user.name) {
      return res.status(400).json({message: 'Bad request:Name obrigatório!'})
    }
    this.userService.deleteUser(user);
    return res.status(200).json({message: 'Usuário excluído'})
}

}