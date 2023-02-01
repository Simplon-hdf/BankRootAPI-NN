import { ApiProperty } from '@nestjs/swagger';
import { AccountRequestTypeEnum } from '../../enums/ceiling_type.enum';

export class CreateAccountRequestDto {
  @ApiProperty({
    name: 'uuid',
    description: 'UUID of user make request',
    minimum: 1,
  })
  user_uuid: string;
  @ApiProperty({
    name: 'content',
    description: 'Description of request',
  })
  content: string;
  @ApiProperty({
    name: 'type',
    description: 'Type of request',
    enum: AccountRequestTypeEnum,
    enumName: 'AccountRequestTypeEnum',
    // enum: ['OVERDRAFT_LIMIT', 'WITHDRAWAL_LIMIT', 'PAYMENT_CEILING'],
  })
  type: AccountRequestTypeEnum;
}
