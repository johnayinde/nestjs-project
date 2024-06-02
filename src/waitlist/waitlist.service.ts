import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class WaitlistService {

    // let start injecting the model we want to use by creating a constructor
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    // create user method
    createUser(CreateUserDto:CreateUserDto){
        const newUser = new this.userModel(CreateUserDto)
        return newUser;
    }

}
