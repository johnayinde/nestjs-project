import { Body, Controller, Get, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { WaitlistService } from './waitlist.service';

@Controller('waitlist')
export class WaitlistController {
    //inject waitlist service class into waitlist controller
    constructor(private user:WaitlistService){}
    @Get()
    getWaitlist(){
        return [{Message:"welcome to nestjs waitlist"}]
    }

    // post route
    @Post()
    // enable validation
    @UsePipes(new ValidationPipe)
    createUser(@Body() createUserDto:CreateUserDto){
        console.log(createUserDto)
    }

}
