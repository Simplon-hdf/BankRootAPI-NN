import { Injectable } from '@nestjs/common';
import { Prisma, user } from '@prisma/client';
import {PrismaService} from "../prisma/prisma.service";

export type User = any;
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(userWereUniqueInput: Prisma.userWhereInput): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: userWereUniqueInput,
    });
  }
}
