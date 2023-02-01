import { forwardRef, Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [BankAccountController],
  imports: [PrismaModule, forwardRef(() => UsersModule)],
  providers: [BankAccountService],
  exports: [BankAccountService],
})
export class BankAccountModule {}
