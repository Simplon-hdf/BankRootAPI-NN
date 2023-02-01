import {
  Request,
  Controller,
  Get,
  Put,
  Body,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createAccount(createUserDto);
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
}
