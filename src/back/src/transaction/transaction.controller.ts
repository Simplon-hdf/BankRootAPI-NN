import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { TransactionByUserDto } from './dto/transaction-by-user.dto';
import { TransactionByBankaccountDto } from './dto/transaction-by-bankaccount.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Controller('transaction')
@ApiTags('Transactions')
@ApiBearerAuth()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @ApiBody({
    description: 'The transaction to create',
    type: CreateTransactionDto,
  })
  @UseGuards(JwtAuthGuard)
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  fetchAll() {
    return this.transactionService.fetchAllTransactions();
  }

  @Get('user/:uuid')
  @ApiBody({
    description: 'The transaction to create',
    type: TransactionByUserDto,
  })
  @ApiParam({
    name: 'uuid',
    description: 'The user uuid',
  })
  @UseGuards(JwtAuthGuard)
  fetchByUser(@Param('uuid') uuid: string) {
    return this.transactionService.fetchByUser(uuid);
  }

  @Get('bank-account/:num_account')
  @ApiParam({
    name: 'num_account',
    description: 'The bank account number',
  })
  @UseGuards(JwtAuthGuard)
  fetchByBankAccount(@Param('num_account') num_account: string) {
    return this.transactionService.fetchByBankAccount(num_account);
  }
  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'The transaction id',
  })
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: number) {
    return this.transactionService.deleteTransaction(id);
  }
}
