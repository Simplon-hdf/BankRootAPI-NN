import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Param,
} from '@nestjs/common';
import { peut_posseder, Prisma, user } from '@prisma/client';
import { ResetPasswordDto } from './dto/reset-password.dto';

import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { BankAccountService } from '../bank-account/bank-account.service';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterDto } from '../auth/dto/register.dto';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from '../auth/auth.service';

export type User = any;
@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => BankAccountService))
    private bankAccountService: BankAccountService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async user(userWereInput: Prisma.userWhereInput): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: userWereInput,
    });
  }

  //find user by mail
  async findUserByMail(mail: string): Promise<user | null> {
    const user = this.prisma.user.findFirstOrThrow({
      where: {
        mail: mail,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
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

  async findOne(id: number): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async updateUser(params: {
    where: Prisma.userWhereUniqueInput;
    data: UpdateUserDto;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async remove(@Param('id') id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }

  async peut_posseder(
    data: Prisma.peut_possederCreateInput,
  ): Promise<peut_posseder> {
    return this.prisma.peut_posseder.create({ data });
  }

  genPassword() {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 12;
    let password = '';
    for (let i = 0; i <= passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  }

  async createAccountWithRandomPassword(createUserDto: CreateUserDto) {
    const registerDto = createUserDto as RegisterDto;
    registerDto.password = this.genPassword();
    return this.createAccount(registerDto);
  }

  async createAccount(registerDto: RegisterDto) {
    const user = await this.user({ mail: registerDto.mail });

    if (user) {
      throw new HttpException('User exist', HttpStatus.CONFLICT);
    }
    console.log(registerDto);

    // salt and hash password
    const salt = await bcrypt.genSalt();
    registerDto.password = await bcrypt.hash(registerDto.password, salt);

    const newUser = await this.create({
      ...registerDto,
      uuid: uuidv4(),
    });

    await this.bankAccountService.createAccount(newUser.uuid);

    return {
      statusCode: 200,
      description: 'Create user successfuly',
    };
  }

  async resetPassword(
    @Param('mail') mail: string,
    resetPasswordDto: ResetPasswordDto,
  ) {
    const user = await this.findUserByMail(mail);
    //hash and salt password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(resetPasswordDto.new_password, salt);
    if (user) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          password: hash,
        },
      });

      return JSON.parse(
        JSON.stringify({
          statusCode: 200,
          description: 'Password reset successfuly',
        }),
      );
    }

    throw new HttpException('Identifiant incorrecte', 401);
  }

  deleteUser(param: { id: number }) {
    return this.prisma.user.delete({
      where: {
        id: param.id,
      },
    });
  }
}
