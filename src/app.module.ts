import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModuleModule } from './db/database-module.module';
import { SecretModule } from './secret/secret.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'role/roles.guard';
import { EmpleadoAdminModule } from './empleado-admin/empleado-admin.module';
import { AsistenciaModule } from './asistencia/asistencia.module';

@Module({
  imports: [DatabaseModuleModule, UsersModule, SecretModule, AuthModule, EmpleadoAdminModule, AsistenciaModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
