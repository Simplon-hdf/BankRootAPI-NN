import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma/prisma.service';
import { BankAccountModule } from '../bank-account/bank-account.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [forwardRef(() => BankAccountModule), forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
