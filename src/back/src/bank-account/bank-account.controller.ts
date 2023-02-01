import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { UpdateCeilingDto } from './dto/update-ceiling.dto';

@Controller('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post('/update-ceiling')
  updateCeiling(updateCeilingDto: UpdateCeilingDto) {
    return this.bankAccountService.updateCeiling(updateCeilingDto);
  }
}
