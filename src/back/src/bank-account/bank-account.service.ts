import {
  Body,
  forwardRef,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { bank_account, Prisma, user } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { UpdateCeilingDto } from './dto/update-ceiling.dto';
import { CreateWithdrawalDto } from './dto/Create-withdrawal.dto';
import { AccountRequestService } from '../account_request/account_request.service';
import { CeilingTypeEnum } from '../enums/ceiling_type.enum';

const LIMIT = 10;
@Injectable()
export class BankAccountService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private requestService: AccountRequestService,
  ) {}

  async create(data: Prisma.bank_accountCreateInput): Promise<bank_account> {
    return this.prisma.bank_account.create({ data });
  }

  async findByNumAccount(num_account: number): Promise<bank_account | null> {
    return this.prisma.bank_account.findFirst({
      where: {
        num_account: num_account,
      },
    });
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

  async findOne(id: number): Promise<bank_account | null> {
    return this.prisma.bank_account.findFirst({
      where: {
        id: id,
      },
    });
  }

  async findAccountWithUser(user: user) {
    return this.prisma.peut_posseder.findFirst({
      where: { user: user },
    });
  }
  async findOneBankNum(bank_account: number): Promise<bank_account | null> {
    return this.prisma.bank_account.findFirst({
      where: {
        num_account: bank_account,
      },
    });
  }

  async bank_account(
    bank_accountWhereInput: Prisma.bank_accountWhereInput,
  ): Promise<bank_account | null> {
    return this.prisma.bank_account.findFirst({
      where: bank_accountWhereInput,
    });
  }

  //update amount
  async updateAmount(params: {
    where: any;
    data: Prisma.bank_accountUpdateInput;
  }): Promise<bank_account> {
    const { where, data } = params;
    return this.prisma.bank_account.update({
      data,
      where,
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

    //update amount bank account

    await this.usersService.peut_posseder({
      bank_account: {
        connect: {
          id: account.id,
        },
      },
      user: {
        connect: {
          id: user?.id,
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

  async withdrawal(@Body() withdrawalDto: CreateWithdrawalDto) {
    const account = await this.bank_account({
      num_account: parseInt(String(withdrawalDto.num_account)),
    });

    if (!account) {
      return {
        status: HttpStatus.NOT_FOUND,
        data: 'Account not exist',
      };
    }
    if (account.withdrawal_limit < withdrawalDto.amount) {
      return {
        status: HttpStatus.BAD_REQUEST,
        data: 'Withdrawal limit exceeded',
      };
    }
    if (account.payment_ceiling < withdrawalDto.amount) {
      return {
        status: HttpStatus.BAD_REQUEST,
        data: 'Payment ceiling exceeded',
      };
    }
    if (account.overdraft_limit < withdrawalDto.amount) {
      return {
        status: HttpStatus.BAD_REQUEST,
        data: 'Overdraft limit exceeded',
      };
    }
    if (account.currency < withdrawalDto.amount) {
      return {
        status: HttpStatus.BAD_REQUEST,
        data: 'Insufficient balance',
      };
    }
    if (withdrawalDto.amount > LIMIT) {
      await this.requestService.createRequest({
        content: 'Ask withdraw of' + withdrawalDto.amount,
        user_uuid: withdrawalDto.user_uuid,
        type: CeilingTypeEnum.WITHDRAWAL_LIMIT,
      });
    } else {
      console.log(account);
      await this.updateAmount({
        where: {
          id: account.id,
        },
        data: {
          currency: account.currency - withdrawalDto.amount,
        },
      });
    }
  }

  //add currency
  async addCurrency(createWithdrawalDto: CreateWithdrawalDto) {
    const account = await this.bank_account({
      num_account: parseInt(String(createWithdrawalDto.num_account)),
    });
    if (!account) {
      return {
        status: HttpStatus.NOT_FOUND,
        data: 'Account not exist',
      };
    }
    await this.updateAmount({
      where: {
        id: account.id,
      },
      data: {
        currency: account.currency + createWithdrawalDto.amount,
      },
    });
  }

  deposit(createWithdrawalDto: CreateWithdrawalDto) {
    //create a message just for deposit
    if (createWithdrawalDto.amount > LIMIT) {
      this.requestService
        .createRequest({
          content: 'Ask deposit of' + createWithdrawalDto.amount,
          user_uuid: createWithdrawalDto.user_uuid,
          type: CeilingTypeEnum.PAYMENT_CEILING,
        })
        .then((r) => console.log(r));
      return {
        status: HttpStatus.UNAUTHORIZED,
        data: 'Deposit limit exceeded',
      };
    }
    return this.addCurrency(createWithdrawalDto);
  }
}
