import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AccountRequestService } from './account_request.service';
import { CreateAccountRequestDto } from './dto/create-account_request.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('account-request')
@ApiTags('Account Requests')
export class AccountRequestController {
  constructor(private readonly accountRequestService: AccountRequestService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Request successfully created',
  })
  @Post()
  createRequest(@Body() createAccountRequestDto: CreateAccountRequestDto) {
    return this.accountRequestService.createRequest(createAccountRequestDto);
  }

  @Get('all')
  getAllRequests() {
    return this.accountRequestService.getAllRequest();
  }

  @Get(':uuid')
  getAllRequestsByUser(@Param('uuid') uuid: string) {
    return this.accountRequestService.getRequestsByUser(uuid);
  }
  @Delete(':id')
  deleteRequest(@Param('id') id: number) {
    return this.accountRequestService.deleteRequest(id);
  }
}
