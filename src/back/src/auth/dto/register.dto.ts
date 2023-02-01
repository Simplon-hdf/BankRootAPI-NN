import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
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
}
