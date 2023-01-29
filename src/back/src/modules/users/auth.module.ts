import { Module } from '@nestjs/common';
import { AuthService } from '../../services/user/auth.service';
import { UsersModule } from './users.module';
import { AuthProvider } from '../../providers/users/auth.provider';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../../strategy/local.strategy';
import { AuthController } from '../../controllers/users/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../constants/auth.constants';
import { JwtStrategy } from '../../strategy/jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthProvider, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, AuthProvider],
})
export class AuthModule {}
