import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { UpdateCeilingDto } from './dto/update-ceiling.dto';
import { CreateWithdrawalDto } from './dto/Create-withdrawal.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bank-account')
@ApiTags('Bank Accounts')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post('/update-ceiling')
  updateCeiling(@Body() updateCeilingDto: UpdateCeilingDto) {
    return this.bankAccountService.updateCeiling(updateCeilingDto);
  }
  @Get('/:id')
  findOne(id: number) {
    return this.bankAccountService.findOne(id);
  }
  //retrait
  @Post(':id/withdrawal')
  withdrawal(
    @Param('id') id: number,
    @Body() createWithdrawalDto: CreateWithdrawalDto,
  ) {
    return this.bankAccountService.withdrawal(createWithdrawalDto);
  }
  //depot
  @Post(':id/deposit')
  deposit(
    @Param('id') id: number,
    @Body() createWithdrawalDto: CreateWithdrawalDto,
  ) {
    return this.bankAccountService.deposit(createWithdrawalDto);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.bankAccountService.delete(id);
  }
}
