import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
  @ApiProperty()
  mail: string;
  @ApiProperty()
  new_password: string;
}
