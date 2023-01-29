import { Module } from '@nestjs/common';
import { UsersProvider } from '../../providers/users/users.provider';
import { PrismaService } from '../../services/data/prisma.service';
import { UserController } from '../../controllers/users/user.controller';

@Module({
  controllers: [UserController],
  providers: [UsersProvider, PrismaService],
  exports: [UsersProvider],
})
export class UsersModule {}
