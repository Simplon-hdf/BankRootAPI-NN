import {
  Request,
  Controller,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { UsersService } from './users.service';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Controller('user')
export class UserController {
  constructor(private readonly usersProvider: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req.user);
    return req.user;
  }

  @Post('reset_password')
  resetPassword(@Body() resetPasswordRequestDto: ResetPasswordDto) {
    return this.usersProvider.resetPassword(resetPasswordRequestDto);
  }
}
