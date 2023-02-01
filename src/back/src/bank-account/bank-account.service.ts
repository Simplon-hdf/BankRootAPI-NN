import { forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { PrismaService } from '../prisma/prisma.service';
import { bank_account, Prisma } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { use } from 'passport';
import { UpdateCeilingDto } from './dto/update-ceiling.dto';

@Injectable()
export class BankAccountService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}

  async create(data: Prisma.bank_accountCreateInput): Promise<bank_account> {
    return this.prisma.bank_account.create({ data });
  }

  async update(params: {
    where: Prisma.bank_accountWhereUniqueInput;
    data: Prisma.bank_accountUpdateInput;
  }): Promise<bank_account> {
    const { where, data } = params;
    return this.prisma.bank_account.update({
      data,
      where,
    });
  }

  async findOne(
    accountWhereUniqueInput: Prisma.bank_accountWhereUniqueInput,
  ): Promise<bank_account | null> {
    return this.prisma.bank_account.findFirst({
      where: accountWhereUniqueInput,
    });
  }

  async bank_account(
    bank_accountWhereInput: Prisma.bank_accountWhereInput,
  ): Promise<bank_account | null> {
    return this.prisma.bank_account.findFirst({
      where: bank_accountWhereInput,
    });
  }

  async createAccount(user_id) {
    const [user, account] = await Promise.all([
      this.usersService.user({
        uuid: user_id,
      }),
      this.create({
        overdraft_limit: 100,
        payment_ceiling: 500,
        withdrawal_limit: 500,
        currency: 0,
        num_account: Date.now(),
      }),
    ]);

    await this.usersService.peut_posseder({
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

  async updateCeiling(updateCeilingDto: UpdateCeilingDto) {
    const account = await this.bank_account({
      num_account: parseInt(String(updateCeilingDto.account_num)),
    });

    if (!account) {
      return {
        status: HttpStatus.NOT_FOUND,
        data: 'Account not exist',
      };
    }

    await this.update({
      where: {
        id: account.id,
      },
      data: {
        [updateCeilingDto.type.toLowerCase()]: updateCeilingDto.new_value,
      },
    });

    return {
      status: HttpStatus.OK,
      data: 'Account ceiling update',
    };
  }
}
