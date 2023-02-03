import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ApiTags } from '@nestjs/swagger';
import { TransactionByUserDto } from './dto/transaction-by-user.dto';
import { TransactionByBankaccountDto } from './dto/transaction-by-bankaccount.dto';

@Controller('transaction')
@ApiTags('Transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @Get()
  fetchAll() {
    return this.transactionService.fetchAllTransactions();
  }

  @Get('user/:uuid')
  fetchByUser(
    @Param('uuid') uuid: string,
    @Body() transactionByUserDto: TransactionByUserDto,
  ) {
    return this.transactionService.fetchByUser(transactionByUserDto);
  }

  @Get('bank-account/:num_account')
  fetchByBankAccount(
    @Param('num_account') num_account: bigint,
    transactionByBankAccount: TransactionByBankaccountDto,
  ) {
    return this.transactionService.fetchByBankAccount(transactionByBankAccount);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.transactionService.deleteTransaction(id);
  }
}
