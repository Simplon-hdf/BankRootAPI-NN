import { Controller, Post, Body, Get } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { UpdateCeilingDto } from './dto/update-ceiling.dto';
import { CreateWithdrawalDto } from './dto/Create-withdrawal.dto';

@Controller('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post('/update-ceiling')
  updateCeiling(updateCeilingDto: UpdateCeilingDto) {
    return this.bankAccountService.updateCeiling(updateCeilingDto);
  }
  @Get('/:id')
  findOne(id: number) {
    return this.bankAccountService.findOne(id);
  }
  //retrait
  @Post('/:id/withdrawal')
  withdrawal(@Body() createWithdrawalDto: CreateWithdrawalDto) {
    return this.bankAccountService.withdrawal(createWithdrawalDto);
  }
}
