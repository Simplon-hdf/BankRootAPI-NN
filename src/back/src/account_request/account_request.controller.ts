import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AccountRequestService } from './account_request.service';
import { CreateAccountRequestDto } from './dto/create-account_request.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Controller('account-request')
@ApiTags('Account Requests Management')
@ApiBearerAuth()
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
  @UseGuards(JwtAuthGuard)
  createRequest(@Body() createAccountRequestDto: CreateAccountRequestDto) {
    return this.accountRequestService.createRequest(createAccountRequestDto);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  getAllRequests() {
    return this.accountRequestService.getAllRequest();
  }

  @Get(':uuid')
  @ApiParam({
    description: 'Uuid of the user',
    name: 'uuid',
  })
  @UseGuards(JwtAuthGuard)
  getAllRequestsByUser(@Param('uuid') uuid: string) {
    return this.accountRequestService.getRequestsByUser(uuid);
  }
  @Delete(':id')
  @ApiParam({
    description: 'Id of the request',
    name: 'id',
  })
  @UseGuards(JwtAuthGuard)
  deleteRequest(@Param('id') id: number) {
    return this.accountRequestService.deleteRequest(id);
  }
}
