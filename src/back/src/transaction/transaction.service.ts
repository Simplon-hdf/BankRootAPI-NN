import { forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { Prisma, transaction } from '@prisma/client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { BankAccountService } from '../bank-account/bank-account.service';

@Injectable()
export class TransactionService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,

    private bankAccountService: BankAccountService,
  ) {}

  async create(data: Prisma.transactionCreateInput): Promise<transaction> {
    return this.prisma.transaction.create({ data });
  }

  async transactions(
    transactionWhereInput: Prisma.transactionWhereInput,
  ): Promise<transaction[]> {
    return this.prisma.transaction.findMany({ where: transactionWhereInput });
  }

  async fetchAllTransactions(): Promise<transaction[]> {
    return this.prisma.transaction.findMany();
  }

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    const user = await this.usersService.user({
      uuid: createTransactionDto.user_uuid,
    });

    if (!user) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'User no exist',
      };
    }

    const bankAccount = await this.bankAccountService.bank_account({
      num_account: createTransactionDto.num_account,
    });

    if (!user || !bankAccount) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'User or bank_account no exist',
      };
    }

    await this.create({
      amount: 0,
      bank_account: { connect: { id: bankAccount.id } },
      state: false,
      type: createTransactionDto.type,
      user: { connect: { id: user.id } },
    });

    return {
      statusCode: HttpStatus.OK,
      data: 'Transaction as created',
    };
  }
}
