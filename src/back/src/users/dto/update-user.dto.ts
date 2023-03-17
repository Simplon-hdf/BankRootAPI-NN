import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'The new or old name of the user',
  })
  name: string;
  @ApiProperty({
    description: 'The new or old lastname of the user',
  })
  lastname: string;
  @ApiProperty({
    description: 'The new or old mail of the user',
  })
  mail: string;
  @ApiProperty({
    description: 'The uuid of the user',
  })
  uuid: string;
}
