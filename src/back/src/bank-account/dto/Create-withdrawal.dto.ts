import { ApiProperty } from '@nestjs/swagger';

export class CreateWithdrawalDto {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  num_account: number;
  @ApiProperty()
  user_uuid: string;
}
