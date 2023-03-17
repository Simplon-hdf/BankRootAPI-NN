import { ApiProperty } from '@nestjs/swagger';

export class TransactionByUserDto {
  @ApiProperty({
    description: 'The user uuid',
  })
  user_uuid: string;
}
