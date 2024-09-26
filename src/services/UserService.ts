export interface User {
  name: string,
  email: string 
}

const db: User[] = [{
    name:'xxx',
    email:'xxx@joao.com'
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
    public deleteUser(user: User): void {
        this.users = this.users.filter(userReg => userReg.email !== user.email);
        console.log(user, this.users)
    }

    public getAllUsers(): User[] {
        return this.users;
    }
}