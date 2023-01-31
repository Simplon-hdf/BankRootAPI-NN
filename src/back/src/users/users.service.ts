import { HttpException, Injectable } from '@nestjs/common';
import { peut_posseder, Prisma, user } from '@prisma/client';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { use } from 'passport';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RankEnum } from '../enums/rank.enum';

export type User = any;
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(userWereInput: Prisma.userWhereInput): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: userWereInput,
    });
  }
  async create(data: Prisma.userCreateInput): Promise<user> {
    return this.prisma.user.create({ data });
  }

  async update(params: {
    where: Prisma.userWhereUniqueInput;
    data: Prisma.userUpdateInput;
  }): Promise<user> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async peut_posseder(
    data: Prisma.peut_possederCreateInput,
  ): Promise<peut_posseder> {
    return this.prisma.peut_posseder.create({ data });
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
      Rank: RankEnum.CLIENT,
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
}
