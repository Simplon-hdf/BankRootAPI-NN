import { Module } from '@nestjs/common';
import { UsersProvider } from './users.provider';
import { PrismaService } from '../prisma.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UsersProvider, PrismaService],
  exports: [UsersProvider],
})
export class UsersModule {}
