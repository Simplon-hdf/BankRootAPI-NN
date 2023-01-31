import { Request, Controller, Post, UseGuards, Get, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import * as dcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly usesrService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }



}
