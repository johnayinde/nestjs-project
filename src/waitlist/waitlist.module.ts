import { Module } from '@nestjs/common';
import { WaitlistController } from './waitlist.controller';
import { WaitlistService } from './waitlist.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { UsersModule } from './users/user.module';

@Module({
  // This is just like saying mongoose.connect(url)
  imports: [ MongooseModule.forRoot('mongodb://admin:password@database'),
],
  controllers: [WaitlistController],
  providers: [WaitlistService]
})
export class WaitlistModule {}
