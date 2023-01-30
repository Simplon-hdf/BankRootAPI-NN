import {Request, Controller, Post, UseGuards, Get, Body} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import {UsersService} from "./users.service";
@Controller('user')
export class UserController {

  constructor(readonly usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const password = await bcrypt.hash(createUserDto.password, 10);
    return this.usersService.create({ ...createUserDto, password });
  }
}
