import { forwardRef, Module } from '@nestjs/common';
import { AccountRequestService } from './account_request.service';
import { AccountRequestController } from './account_request.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [AccountRequestController],
  imports: [PrismaModule, forwardRef(() => UsersModule)],
  providers: [AccountRequestService],
  exports: [AccountRequestService],
})
export class AccountRequestModule {}
