import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AccountRequestService } from './account_request.service';
import { CreateAccountRequestDto } from './dto/create-account_request.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('account-request')
export class AccountRequestController {
  constructor(private readonly accountRequestService: AccountRequestService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Request succefully created',
  })
  @Post()
  createRequest(@Body() createAccountRequestDto: CreateAccountRequestDto) {
    return this.accountRequestService.createRequest(createAccountRequestDto);
  }
}
