import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService){}

    async validateUser(username: string, password:string): Promise<any> {
        const user = await this.usersService.Login(username);
        
        const clave = password;
        const salt = await bcrypt.getRounds(user.password);
        
        /* 
        Se tiene que hacer el replace porque los hash generados por php son distintos a los creados por Node    
        https://stackoverflow.com/questions/26643587/comparing-bcrypt-hash-between-php-and-nodejs

        */ 
        //const hash = await (await bcrypt.hashSync(clave, 13)).replace('$2a$', '$2y$');
        const isMatch = await bcrypt.compare(clave, user.password);

        console.log(user, isMatch);

        if (user && isMatch) {
          const { password, ...result } = user;
          return result;
        }

        return null;
    }

    async login(user: any){
        const payload = {
            username: user.username,
            sub: user._id
        };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
