import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SecretService } from 'src/secret/secret.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [SecretService],
})
export class AuthModule {}
