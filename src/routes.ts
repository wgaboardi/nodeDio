import { Router } from 'express'
import { UserControler } from './controllers/UserController';

export const router = Router()

const userControler = new UserControler();
router.post('/user', userControler.createUser);
router.get('/user/list', userControler.getAllUsers)


