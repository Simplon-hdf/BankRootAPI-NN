import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { BankAccountModule } from './bank-account/bank-account.module';
import { AccountRequestModule } from './account_request/account_request.module';
import { TransactionModule } from './transaction/transaction.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [AuthModule, AccountRequestModule, BankAccountModule, TransactionModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
