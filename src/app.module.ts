import { Module } from '@nestjs/common';
import { WaitlistModule } from './waitlist/waitlist.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // This is just like saying mongoose.connect(url)
  imports: [MongooseModule.forRoot('mongodb://admin:password@database'),WaitlistModule],
})
export class AppModule {}
