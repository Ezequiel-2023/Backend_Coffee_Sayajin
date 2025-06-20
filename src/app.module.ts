import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModuleModule } from './db/database-module.module';
import { SecretModule } from './secret/secret.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModuleModule, UsersModule, SecretModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
