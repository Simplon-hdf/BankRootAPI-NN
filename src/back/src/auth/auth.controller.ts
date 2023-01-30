import { Request, Controller, Post, UseGuards, Get, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly prisma: PrismaService, private readonly usersService: UsersService) {}


  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    const password = await bcrypt.hash(createUserDto.password, 10);
    console.log(password);
    return this.usersService.create({ ...createUserDto, password });

  }


}