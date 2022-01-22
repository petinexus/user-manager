import { Injectable } from '@nestjs/common';
import { USERS } from './user.mock';


@Injectable()
export class UserService {
    private users = USERS;

    public async getUsers(){
        var json = JSON.stringify(this.users);
        return json;
    }
}


