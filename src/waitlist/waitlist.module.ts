import { Module } from '@nestjs/common';
import { WaitlistController } from './waitlist.controller';
import { WaitlistService } from './waitlist.service';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schema/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
        {
            name: User.name,
            schema:UserSchema
        }
    ])
],
  controllers: [WaitlistController],
  providers: [WaitlistService]
})
export class WaitlistModule {}
