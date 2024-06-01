import { Controller, Get } from '@nestjs/common';

@Controller('waitlist')
export class WaitlistController {
    @Get()
    getWaitlist(){
        return [{Message:"welcome to nestjs waitlist"}]
    }
}
