import { CeilingTypeEnum } from '../../enums/ceiling_type.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCeilingDto {
  @ApiProperty()
  account_num: string;
  @ApiProperty()
  new_value: number;
  @ApiProperty()
  type: CeilingTypeEnum;
}
