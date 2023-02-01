import { ApiProperty } from '@nestjs/swagger';
import { RankEnum } from '../../enums/rank.enum';
import { CreateUserDto } from '../../users/dto/create-user.dto';

export class RegisterDto extends CreateUserDto {
  @ApiProperty()
  password: string;
}
