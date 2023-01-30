import { Request, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import {CreateUserDto} from "./dto/create-user.dto";
import {PrismaService} from "../prisma/prisma.service";

@Controller('user')
export class UserController {
    constructor(private readonly prisma: PrismaService) {}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }
}
