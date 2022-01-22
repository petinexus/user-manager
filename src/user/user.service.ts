import { Injectable } from '@nestjs/common';
import { USERS } from './user.mock';


@Injectable()
export class UserService {
    private users = USERS;

    public getUsers(){
        return this.users;
    }

    public getUser(id: number){
        const user = this.users.find((user) => user.id == id);
        return user;
    }

    public getUsersByName(name: string){
        const usersbyname = this.users.filter((usersbyname) => usersbyname.name == name);
        return usersbyname;
    }

    public postUser(user){
        return this.users.push(user);
    }

    
}


