import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminService } from './services/data/admin.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AdminService],
})
export class AppModule {}
