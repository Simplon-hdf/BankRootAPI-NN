import { v4 as uuid } from 'uuid';
import { AccountRequestService } from '../account_request.service';
import { Test } from '@nestjs/testing';
import { UsersService } from '../../users/users.service';
import { PrismaService } from '../../prisma/prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { RankEnum } from '../../enums/rank.enum';
import { PrismaClient, user, request } from '@prisma/client';
import { CeilingTypeEnum } from '../../enums/ceiling_type.enum';
import { HttpStatus } from '@nestjs/common';
import { BankAccountService } from '../../bank-account/bank-account.service';

describe('Test request service', () => {
  let accountRequestService: AccountRequestService;
  let usersService: UsersService;
  let bankAccountService: BankAccountService;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AccountRequestService,
        UsersService,
        BankAccountService,
        PrismaService,
      ],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaService>())
      .compile();

    accountRequestService = await moduleRef.resolve(AccountRequestService);
    bankAccountService = await moduleRef.resolve(BankAccountService);
    usersService = await moduleRef.resolve(UsersService);
    prismaService = moduleRef.get<DeepMockProxy<PrismaClient>>(PrismaService);
  });

  describe('#createRequest()', () => {
    it('should create user', async () => {
      const user: user | undefined = {
        id: 1,
        name: 'TestName',
        lastname: 'TestLastName',
        mail: 'test@test.fr',
        password: 'testPassword',
        uuid: uuid(),
        rank: RankEnum.CLIENT,
        updated_at: new Date(),
        created_at: new Date(),
      };

      const request: request | undefined = {
        id: 1,
        content: 'Content of request',
        request_type: CeilingTypeEnum.PAYMENT_CEILING,
        status: false,
        id_user: user.id,
        created_at: new Date(),
        update_at: new Date(),
      };

      prismaService.user.findFirst.mockResolvedValue(user);
      prismaService.request.findFirst.mockResolvedValue(request);
      prismaService.request.create.mockResolvedValue(request);

      expect(
        await accountRequestService.createRequest({
          content: 'Content of request',
          type: CeilingTypeEnum.PAYMENT_CEILING,
          user_uuid: user.uuid,
        }),
      ).toBe({ status: HttpStatus.OK, data: 'request send!' });
    });
  });
});
