import { Test } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { PrismaService } from '../../prisma/prisma.service';
import { BankAccountService } from '../../bank-account/bank-account.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

describe('Test users service', () => {
  let usersService: UsersService;
  let prismaService: DeepMockProxy<PrismaService>;
  const mockedBankAccountServide = {};

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UsersService,
        PrismaService,
        {
          provide: BankAccountService,
          useValue: mockedBankAccountServide,
        },
      ],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaService>())
      .compile();

    usersService = await moduleRef.get(UsersService);
    prismaService = await moduleRef.get<DeepMockProxy<PrismaService>>(
      PrismaService,
    );
  });
});
