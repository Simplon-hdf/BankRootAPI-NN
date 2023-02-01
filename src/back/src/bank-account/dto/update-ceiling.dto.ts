import { CeilingTypeEnum } from '../../enums/ceiling_type.enum';

export class UpdateCeilingDto {
  account_num: bigint;
  new_value: number;

  type: CeilingTypeEnum;
}
