import { Body, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly usersProvider: UsersService,
    private readonly authService: AuthService,

  ) {}

  async validateUser(loginDto: LoginDto): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { mail: loginDto.mail },
    });
  bcrypt.compare(loginDto.password, user.password, function(err, result) {
    if (result) {
      return user;
    } else {
      return null;
    }
  });

  }

  async login(user: any) {
    const payload = { username: user.mail, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }



  create(createUserDto: CreateUserDto) {
    return this.usersProvider.create(createUserDto);
  }
}
