import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/data/prisma.service';
import { Prisma, user } from '@prisma/client';

export type User = any;
@Injectable()
export class UsersProvider {
  constructor(private prisma: PrismaService) {}

  async user(
    userWereUniqueInput: Prisma.userWhereUniqueInput,
  ): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: userWereUniqueInput,
    });
  }
}
