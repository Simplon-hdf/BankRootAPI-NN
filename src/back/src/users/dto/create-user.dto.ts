import { ApiProperty } from '@nestjs/swagger';
import { RankEnum } from '../../enums/rank.enum';

export class CreateUserDto {
  @ApiProperty({
    name: 'uuid',
    description: 'UUID of user',
    minimum: 1,
  })
  name: string;
  @ApiProperty({
    name: 'name',
    description: 'Name of user',
    minimum: 1,
  })
  @ApiProperty({
    name: 'lastname',
    description: 'Lastname of user',
    minimum: 1,
  })
  lastname: string;
  @ApiProperty({
    name: 'mail',
    description: 'Mail of user',
    minimum: 1,
  })
  mail: string;
  @ApiProperty({
    name: 'password',
    description: 'Password of user',
    minimum: 1,
  })
  @ApiProperty({
    name: 'created_at',
    description: 'Date of creation of user',
    minimum: 1,
  })
  created_at: Date;
  @ApiProperty({
    name: 'updated_at',
    description: 'Date of update of user',
    minimum: 1,
  })
  updated_at: Date;
  @ApiProperty({
    name: 'rank',
    description: 'Rank of user',
    enum: RankEnum,
  })
  rank: RankEnum;
}
