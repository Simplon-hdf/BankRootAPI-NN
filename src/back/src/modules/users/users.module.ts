import { Module } from '@nestjs/common';
import { UsersProvider } from '../../providers/users/users.provider';

@Module({
  providers: [UsersProvider],
  exports: [UsersProvider],
})
export class UsersModule {}
