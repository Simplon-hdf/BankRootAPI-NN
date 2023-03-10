import {
  Request,
  Controller,
  Get,
  Put,
  Body,
  Param,
  Post,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('The user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  //find user by id
  @Get(':id')
  findOne(id: number) {
    return this.usersService.findOne(id);
  }
  @Get('me')
  findMe(@Request() req) {
    return req.user;
  }
  //update
  @Put(':id')
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
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createAccountWithRandomPassword(createUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser({ id: Number(id) });
  }
}
