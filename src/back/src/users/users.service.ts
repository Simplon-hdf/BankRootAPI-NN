import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, user } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(userWereUniqueInput: Prisma.userWhereInput): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: userWereUniqueInput,
    });
  }

  async findOne(mail: string): Promise<user | undefined> {
    console.log(mail);
    return this.prisma.user.findFirst({
      where: {
        mail: mail,
      },
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }
}
