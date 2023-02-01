import { ApiProperty } from '@nestjs/swagger';

export class CreateWithdrawalDto {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  num_account: string;
  @ApiProperty()
  user_uuid: string;
}
