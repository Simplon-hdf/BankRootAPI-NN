import { ApiProperty } from '@nestjs/swagger';

export class TransactionByUserDto {
  @ApiProperty()
  user_uuid: string;
}
