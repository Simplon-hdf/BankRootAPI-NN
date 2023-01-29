import { Module } from '@nestjs/common';
import { AuthService } from '../../services/user/auth.service';
import { UsersModule } from './users.module';
import { AuthProvider } from '../../providers/users/auth.provider';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../../strategy/local.strategy';
import { AuthController } from '../../controllers/user/auth.controller';

@Module({
  controllers: [AuthController],
  imports: [UsersModule, PassportModule],
  providers: [AuthProvider, AuthService, LocalStrategy],
})
export class AuthModule {}
