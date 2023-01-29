import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/user/auth.controller';
import { AuthProvider } from './providers/users/auth.provider';
import { PrismaService } from './services/data/prisma.service';
import { AuthService } from './services/user/auth.service';
import { AuthModule } from './modules/users/auth.module';
import { UsersModule } from './modules/users/users.module';
import { UsersProvider } from './providers/users/users.provider';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    PrismaService,
    AuthProvider,
    AuthService,
    UsersProvider,
  ],
})
export class AppModule {}
