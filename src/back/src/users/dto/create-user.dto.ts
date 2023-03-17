import { ApiProperty } from '@nestjs/swagger';
import { RankEnum } from '../../enums/rank.enum';

export class CreateUserDto {
  @ApiProperty({
    name: 'name',
    description: 'Name of user',
    minimum: 1,
  })
  name: string;
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
  rank: RankEnum;
}
