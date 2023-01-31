import { Module } from '@nestjs/common';
import { AccountRequestService } from './account_request.service';
import { AccountRequestController } from './account_request.controller';

@Module({
  controllers: [AccountRequestController],
  providers: [AccountRequestService]
})
export class AccountRequestModule {}
