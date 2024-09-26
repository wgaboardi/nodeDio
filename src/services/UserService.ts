export interface User {
  name: string,
  email: string 
}

const db: User[] = [{
    name:'joao',
    email:'joao@joao.com'
}]


export class UserService {

    users: User[];

    constructor(database = db) {
        this.users = database;
    }
    public createUser(user: User): void {
        this.users.push(user);
        console.log('DB atualizado',this.users);
    }

    public getAllUsers(): User[] {
        return this.users;
    }
}