import { Controller, Post, UseGuards, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
@Controller('auth')
@ApiTags('Authentification')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({
    type: LoginDto,
    description: 'Login',
  })
  async login(@Request() req) {
    // return loginDto;
    return this.authService.login(req.user);
  }
  @Post('register')
  @ApiBody({
    type: RegisterDto,
    description: 'Register',
  })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
