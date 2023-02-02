import { forwardRef, Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { BankAccountModule } from '../bank-account/bank-account.module';

@Module({
  imports: [PrismaModule, BankAccountModule, forwardRef(() => UsersModule)],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
