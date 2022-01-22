import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    @Get()
    public getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    public getUser(@Param('id') id: number){
        return this.userService.getUser(id);
    }

}
