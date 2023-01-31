import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountRequestService } from './account_request.service';
import { CreateAccountRequestDto } from './dto/create-account_request.dto';
import { UpdateAccountRequestDto } from './dto/update-account_request.dto';

@Controller('account-request')
export class AccountRequestController {
  constructor(private readonly accountRequestService: AccountRequestService) {}

  @Post()
  create(@Body() createAccountRequestDto: CreateAccountRequestDto) {
    return this.accountRequestService.create(createAccountRequestDto);
  }

  @Get()
  findAll() {
    return this.accountRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountRequestDto: UpdateAccountRequestDto) {
    return this.accountRequestService.update(+id, updateAccountRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountRequestService.remove(+id);
  }
}
