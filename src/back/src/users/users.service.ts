import { Injectable } from '@nestjs/common';
import { Prisma, user } from '@prisma/client';
import {PrismaService} from "../prisma/prisma.service";
import {CreateUserDto} from "./dto/create-user.dto";

export type User = any;
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.prisma.user.create({ data: createUserDto });
  }
  async user(userWereUniqueInput: Prisma.userWhereInput): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: userWereUniqueInput,
    });
  }
  async findOne(mail: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({
      where: { mail: mail },
    });
  }

}
