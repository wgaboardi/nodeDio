import { Router } from 'express'
import { UserControler } from './controllers/UserController';
import { LoginController } from './controllers/LoginController';
import { verifyAuth } from './middleware/verifyAuth';

export const router = Router()

const userControler = new UserControler();
const loginControler = new LoginController();
router.post('/user', userControler.createUser);
router.delete('/user', userControler.deleteUser);
router.get('/user/:userId', verifyAuth, userControler.getUser)
router.post('/login', loginControler.login)


