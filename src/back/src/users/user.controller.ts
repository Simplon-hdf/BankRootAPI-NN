import {
  Request,
  Controller,
  Get,
  Put,
  Body,
  Param,
  Post,
  Delete,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guard/local-auth.guard';

@Controller('user')
@ApiTags('The user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  //find user by id
  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The user id',
  })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @Get('/find/profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }

  //update
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiParam({
    name: 'id',
    description: 'The user id',
    required: true,
  })
  @ApiBody({
    description: 'The user to update',
    type: UpdateUserDto,
    required: true,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser({
      where: { id: Number(id) },
      data: updateUserDto,
    });
  }

  @Post('/register')
  @ApiResponse({
    status: 200,
    description: 'User as created !',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'User already exist',
  })
  @ApiBody({
    description: 'The user to create with random password',
    type: CreateUserDto,
    required: true,
  })
  @UseGuards(JwtAuthGuard)
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createAccountWithRandomPassword(createUserDto);
  }
  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'The user id',
    required: true,
  })
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser({ id: Number(id) });
  }
}
