import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/user/auth.controller';
import { AuthProvider } from './providers/user/auth.provider';
import { PrismaService } from './services/data/prisma.service';
import { AuthService } from './services/user/auth.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, PrismaService, AuthProvider, AuthService],
})
export class AppModule {}
