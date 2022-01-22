import { Injectable } from '@nestjs/common';
import { USERS } from './user.mock';


@Injectable()
export class UserService {
    private users = USERS;

    public getUsers(){
        var json = JSON.stringify(this.users);
        return json;
    }

    public getUser(id: number){
        const user = this.users.find((user) => user.id == id);
        return user;
    }

    
}


