import { Module } from '@nestjs/common';
import { UsersProvider } from '../../providers/users/users.provider';
import { PrismaService } from '../../services/data/prisma.service';

@Module({
  providers: [UsersProvider, PrismaService],
  exports: [UsersProvider],
})
export class UsersModule {}
