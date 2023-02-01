import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'Amount of transaction',
  })
  amount: number;
  @ApiProperty({
    description: 'State of transaction',
  })
  state: boolean;
}
