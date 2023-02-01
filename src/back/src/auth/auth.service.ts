import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.findUserByMail(createUserDto.mail);

    if (user) {
      return {
        message: 'User already exists',
      };
    } else {
      return this.usersService.createAccount({ ...createUserDto });
    }
  }

  async validateUser(mail: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByMail(mail);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findUserByMail(loginDto.mail);
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
