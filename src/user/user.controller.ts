import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

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

    @Get('name/:name')
    public getUsersByName(@Param('name') name: string){
        return this.userService.getUsersByName(name);
    }

    @Post()
    public postUser(@Body() user: UserDto){
        return this.userService.postUser(user);
    }
}
