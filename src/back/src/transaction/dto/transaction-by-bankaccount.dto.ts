import { ApiProperty } from '@nestjs/swagger';

export class TransactionByBankaccountDto {
  @ApiProperty({
    description: 'The bank account number',
    example: '123456789',
    type: 'string',
  })
  account_num: string;
}
