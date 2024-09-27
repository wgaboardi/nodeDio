import { AppDataSource } from '../database';
import { User } from '../entities/User';
import { UserRepository } from './../repositories/UserRepository';

export class UserService {

    private userRepository: UserRepository

    //users: User[];

    //constructor(database = db) {
        //this.users = database;
    //}
    constructor(
        userRepository = new UserRepository(AppDataSource.manager)
    ) {
        this.userRepository = userRepository;
    }
    createUser = async (name: string, email: string, password: string) => {
        const user = new User(name, email, password)
        return this.userRepository.createUser(user) 

        //this.users.push(user);
        //console.log('DB atualizado',this.users);
    }
    public deleteUser(user: User): void {
        //this.users = this.users.filter(userReg => userReg.email !== user.email);
        //console.log(user, this.users)
    }

    getUser = () => {

    }
}