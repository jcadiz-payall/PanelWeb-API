import { Controller, Request, Post, UseGuards, Res, HttpStatus, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from './dto/login.dto';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get('/')
    async getProduct(@Res() res){
        const users = await this.usersService.getUsers();
        return res.status(HttpStatus.OK).json({
            message: 'Users List',
            users
        });
    }

    // @Post('auth/login')
    // async login(@Body() loginDto: LoginDto):Promise<User> {
    //     return await this.auth.validateUser(loginDto);
    // }
}
