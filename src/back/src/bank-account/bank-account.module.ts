import { forwardRef, Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { AccountRequestController } from '../account_request/account_request.controller';
import { AccountRequestModule } from '../account_request/account_request.module';
import { AccountRequestService } from '../account_request/account_request.service';

@Module({
  controllers: [BankAccountController],
  imports: [PrismaModule, AccountRequestModule, forwardRef(() => UsersModule)],
  providers: [BankAccountService],
  exports: [BankAccountService],
})
export class BankAccountModule {}
