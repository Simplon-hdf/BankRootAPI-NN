import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { UpdateCeilingDto } from './dto/update-ceiling.dto';
import { CreateWithdrawalDto } from './dto/Create-withdrawal.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Controller('bank-account')
@ApiTags('Bank Accounts')
@ApiBearerAuth()
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post('/update-ceiling')
  @ApiBody({
    type: UpdateCeilingDto,
    description: 'Update ceiling of a bank account',
  })
  @UseGuards(JwtAuthGuard)
  updateCeiling(@Body() updateCeilingDto: UpdateCeilingDto) {
    return this.bankAccountService.updateCeiling(updateCeilingDto);
  }
  @Get('/:id')
  @ApiParam({
    description: 'Id of the bank account',
    name: 'id',
  })
  @UseGuards(JwtAuthGuard)
  findOne(id: number) {
    return this.bankAccountService.findOne(id);
  }
  //retrait
  @Post(':id/withdrawal')
  @ApiBody({
    type: CreateWithdrawalDto,
    description: 'Withdrawal from a bank account',
  })
  @ApiParam({
    description: 'Id of the bank account',
    name: 'id',
  })
  @UseGuards(JwtAuthGuard)
  withdrawal(
    @Param('id') id: number,
    @Body() createWithdrawalDto: CreateWithdrawalDto,
  ) {
    return this.bankAccountService.withdrawal(createWithdrawalDto);
  }
  //depot
  @Post(':id/deposit')
  @ApiBody({
    type: CreateWithdrawalDto,
    description: 'Deposit to a bank account',
  })
  @ApiParam({
    description: 'Id of the bank account',
    name: 'id',
  })
  @UseGuards(JwtAuthGuard)
  deposit(
    @Param('id') id: number,
    @Body() createWithdrawalDto: CreateWithdrawalDto,
  ) {
    return this.bankAccountService.deposit(createWithdrawalDto);
  }
  @Delete(':id')
  @ApiParam({
    description: 'Id of the bank account',
    name: 'id',
  })
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: number) {
    return this.bankAccountService.delete(id);
  }
}
