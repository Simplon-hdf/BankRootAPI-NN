import { ApiProperty } from '@nestjs/swagger';
import { RankEnum } from '../../enums/rank.enum';

export class CreateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  mail: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  uuid: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  Rank: RankEnum;
}
