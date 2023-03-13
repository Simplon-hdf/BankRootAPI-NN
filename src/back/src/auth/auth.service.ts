import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.usersService.user({
      mail: registerDto.mail,
    });
    if (user) {
      return {
        message: 'User already exists',
      };
    } else {
      return this.usersService.createAccount({ ...registerDto });
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

    if (!user) {
      throw new Error('User not exist');
    }

    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
