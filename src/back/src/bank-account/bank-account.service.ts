import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { PrismaService } from '../prisma/prisma.service';
import { bank_account, Prisma } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { use } from 'passport';

@Injectable()
export class BankAccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async create(data: Prisma.bank_accountCreateInput): Promise<bank_account> {
    return this.prisma.bank_account.create({ data });
  }

  async findOne(
    accountWhereUniqueInput: Prisma.bank_accountWhereUniqueInput,
  ): Promise<bank_account | null> {
    return this.prisma.bank_account.findFirst({
      where: accountWhereUniqueInput,
    });
  }

  async createAccount(createBankAccountDto: CreateBankAccountDto) {
    const [user, account] = await Promise.all([
      this.usersService.user({
        uuid: createBankAccountDto.user_id,
      }),
      this.create({
        currency: 0,
        num_account: Date.now(),
      }),
    ]);

    await this.usersService.add_account({
      bank_account: {
        connect: {
          id: account.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    });

    return 'This action adds a new bankAccount';
  }
}
