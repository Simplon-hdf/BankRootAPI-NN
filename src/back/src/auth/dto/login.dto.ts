import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
  @ApiProperty({
    name: 'mail',
    description: 'Mail of user for connexion',
    minimum: 1,
  })
  mail: string;
  @ApiProperty({
    name: 'password',
    description: 'Password of user for connexion',
    minimum: 1,
  })
  password: string;
}
