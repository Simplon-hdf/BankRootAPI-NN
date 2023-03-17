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
import {ApiBody, ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger';

@Controller('account-request')
@ApiTags('Account Requests Management')
export class AccountRequestController {
  constructor(private readonly accountRequestService: AccountRequestService) {}


  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Request successfully created',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Already request incoming',
  })
  @ApiBody({
    type: CreateAccountRequestDto,
    description: 'Create a new account request',
  })
  createRequest(@Body() createAccountRequestDto: CreateAccountRequestDto) {
    return this.accountRequestService.createRequest(createAccountRequestDto);
  }

  @Get('all')
  getAllRequests() {
    return this.accountRequestService.getAllRequest();
  }

  @Get(':uuid')
  @ApiParam({
    description: 'Uuid of the user',
    name: 'uuid',
  })
  getAllRequestsByUser(@Param('uuid') uuid: string) {
    return this.accountRequestService.getRequestsByUser(uuid);
  }
  @Delete(':id')
  @ApiParam({
    description: 'Id of the request',
    name: 'id',
  })
  deleteRequest(@Param('id') id: number) {
    return this.accountRequestService.deleteRequest(id);
  }
}
