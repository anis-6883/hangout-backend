import { Module } from '@nestjs/common';
import { UserAuthController } from './user-auth.controller';

@Module({
  controllers: [UserAuthController],
})
export class UserAuthModule {}
