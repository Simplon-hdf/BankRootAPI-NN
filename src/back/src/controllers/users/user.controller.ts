import { Request, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../../guard/jwt-auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
