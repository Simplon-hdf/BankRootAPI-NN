import { ApiProperty } from '@nestjs/swagger';

export class TransactionByBankaccountDto {
  @ApiProperty()
  account_num: bigint;
}
