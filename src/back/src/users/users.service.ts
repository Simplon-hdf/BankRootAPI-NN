import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, user } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

export type User = any;
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(userWereInput: Prisma.userWhereInput): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: userWereInput,
    });
  }

  async update(params: {
    where: Prisma.userWhereUniqueInput;
    data: Prisma.userUpdateInput;
  }): Promise<user> {
    const { where, data } = params;
    return this.prisma.user.update({ data, where });
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const user = await this.user({ mail: resetPasswordDto.mail });
    if (user) {
      await this.update({
        data: {
          password: resetPasswordDto.new_password,
        },
        where: {
          id: user.id,
        },
      });

      return JSON.parse(
        JSON.stringify({
          statusCode: 200,
          description: 'Mot de passe mis à jour',
        }),
      );
    }

    throw new HttpException('Identifiant incorrecte', 401);
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
