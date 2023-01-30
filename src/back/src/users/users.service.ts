import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, user } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

export type User = any;
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(userWereUniqueInput: Prisma.userWhereInput): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: userWereUniqueInput,
    });
  }
  async create(data: Prisma.userCreateInput): Promise<user> {
    return this.prisma.user.create({ data });
  }

  async createAccount(createUserDto: CreateUserDto) {
    const user = await this.user({ mail: createUserDto.mail });

    if (user) {
      throw new HttpException('User exist', 200);
    }

    await this.create({
      name: createUserDto.name,
      lastname: createUserDto.lastname,
      mail: createUserDto.mail,
      created_at: createUserDto.created_at,
      isadmin: false,
      isclient: false,
      password: createUserDto.password,
      update_at: createUserDto.updated_at,
      uuid: createUserDto.uuid,
    });
    return JSON.parse(
      JSON.stringify({
        statusCode: 200,
        description: 'Create user successfuly',
      }),
    );
  }
}
