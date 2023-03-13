import { v4 as uuid } from 'uuid';
import { AccountRequestService } from '../account_request.service';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { RankEnum } from '../../enums/rank.enum';
import { PrismaClient, user, request, Prisma } from '@prisma/client';
import { CeilingTypeEnum } from '../../enums/ceiling_type.enum';
import { HttpStatus } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

describe('Test request service', () => {
  let accountRequestService: AccountRequestService;
  let prismaService: DeepMockProxy<PrismaClient>;
  let usersService: UsersService;

  const user = {
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

  const mockUsersService = {
    user: jest
      .fn()
      .mockImplementation((whereInput: Prisma.userWhereInput) =>
        Promise.resolve(user),
      ),
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AccountRequestService,
        PrismaService,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaService>())
      .compile();

    accountRequestService = await moduleRef.get(AccountRequestService);
    usersService = moduleRef.get(UsersService);
    prismaService = moduleRef.get<DeepMockProxy<PrismaClient>>(PrismaService);
  });

  describe('#createRequest()', () => {
    beforeEach(() => {
      prismaService.request.create.mockResolvedValue(request);
    });

    it('should create user request', async () => {
      prismaService.request.findFirst.mockResolvedValue(null);

      expect(await usersService.user({ uuid: user.uuid })).toStrictEqual(user);

      expect(
        await accountRequestService.createRequest({
          content: 'Content of request',
          type: CeilingTypeEnum.PAYMENT_CEILING,
          user_uuid: user.uuid,
        }),
      ).toStrictEqual({ status: HttpStatus.OK, data: 'request send!' });
    });

    it('should return error if request already exist', async () => {
      prismaService.request.findFirst.mockResolvedValue(request);

      expect(await usersService.user({ uuid: user.uuid })).toStrictEqual(user);

      expect(
        await accountRequestService.createRequest({
          content: 'Content of request',
          type: CeilingTypeEnum.PAYMENT_CEILING,
          user_uuid: user.uuid,
        }),
      ).toStrictEqual({
        status: HttpStatus.UNAUTHORIZED,
        data: 'Already request incoming ',
      });
    });
  });

  describe('#getRequestsByUser()', () => {
    it('should return all request of specific user', async () => {
      prismaService.request.findMany.mockResolvedValue([request]);
      jest.spyOn(UsersService.prototype, 'user').mockResolvedValue(user);
      const requests = await accountRequestService.getRequestsByUser(user.uuid);

      expect(usersService.user).toHaveBeenCalled();
      expect(requests).toStrictEqual({
        status: HttpStatus.OK,
        data: [request],
      });
    });
  });
});
