import { ApiProperty } from '@nestjs/swagger';
import { TransactionTypeEnum } from '../../enums/transaction_type.enum';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'UUID of user when make request',
  })
  user_uuid: string;

  @ApiProperty({
    description: 'Amount of transaction',
  })
  amount: number;
  @ApiProperty({
    description: 'Type of transaction',
  })
  type: TransactionTypeEnum;

  @ApiProperty({
    description: 'Number of user account make transaction',
  })
  num_account: string;
}
