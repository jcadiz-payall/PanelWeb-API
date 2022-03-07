import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly usersModel: Model<User>){}
    
    async getUsers(): Promise<User[]> {
      const users = await this.usersModel.find().limit(10);
      //console.log(users);
      return users;
    }

    async Login(username: string): Promise<User>{
      return await this.usersModel.findOne({ username: username });
    }

}
