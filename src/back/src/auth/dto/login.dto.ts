import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class LoginDto {
  @IsString()
  @ApiProperty({
    name: 'mail',
    description: 'Mail of user for connexion',
    minimum: 1,
  })
  mail: string;
  @IsString()
  @ApiProperty({
    name: 'password',
    description: 'Password of user for connexion',
    minimum: 1,
  })
  password: string;
}
