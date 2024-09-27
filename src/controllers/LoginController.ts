import { UserService } from './../services/UserService';
import { Request, Response } from 'express';


export class LoginController {
  userService: UserService;
  constructor(
    userService = new UserService()
  ) {
    this.userService = userService 
  }

  login = async(request: Request, response: Response) => {
     const { email, password} = request.body
     if (!email || !password) {
       return response.status(400).json({ message: 'All fields must be filled' });
     }
     try {
     const token = await this.userService.getToken(email, password)
     return response.status(200).json( { token } );
    } catch (error ) {
      return response.status(500).json( { message: 'Email/password invalid!' } );
    }
  }
}