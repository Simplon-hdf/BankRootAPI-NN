import { PartialType } from '@nestjs/swagger';
import { CreateAccountRequestDto } from './create-account_request.dto';

export class UpdateAccountRequestDto extends PartialType(
  CreateAccountRequestDto,
) {}
