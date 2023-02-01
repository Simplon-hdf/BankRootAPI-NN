import { forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAccountRequestDto } from './dto/create-account_request.dto';
import { Prisma, request } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AccountRequestService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async create(data: Prisma.requestCreateInput): Promise<request> {
    return this.prisma.request.create({ data });
  }

  async requests(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.requestWhereUniqueInput;
    where?: Prisma.requestWhereInput;
    orderBy?: Prisma.requestOrderByWithRelationInput;
  }): Promise<request[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.request.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async request(
    requestWhereInput: Prisma.requestWhereInput,
  ): Promise<request | null> {
    return this.prisma.request.findFirst({
      where: requestWhereInput,
    });
  }

  async fetchAll(): Promise<request[]> {
    return this.prisma.request.findMany();
  }

  async getAllRequest() {
    return this.fetchAll();
  }

  async getRequestsByUser(uuid) {
    const user = await this.usersService.findUserByUUID(uuid);
    if (!user) {
      return {
        status: HttpStatus.BAD_REQUEST,
        data: 'Unknown user',
      };
    }

    const request = await this.requests({
      where: { user: user },
    });

    return {
      status: HttpStatus.OK,
      data: request,
    };
  }

  async createRequest(createAccountRequestDto: CreateAccountRequestDto) {
    const user = await this.usersService.findUserByUUID(
      createAccountRequestDto.user_uuid,
    );
    const existing_request = await this.request({
      request_type: createAccountRequestDto.type,
    });

    if (existing_request) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        data: 'Already request incoming ',
      };
    }

    await this.create({
      content: createAccountRequestDto.content,
      request_type: createAccountRequestDto.type,
      status: false,
      user: {
        connect: { id: user.id },
      },
    });

    return { status: HttpStatus.OK, data: 'request send!' };
  }
}
