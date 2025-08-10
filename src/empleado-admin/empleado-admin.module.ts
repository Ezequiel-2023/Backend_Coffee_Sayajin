import { Module } from '@nestjs/common';
import { EmpleadoAdminService } from './empleado-admin.service';
import { EmpleadoAdminController } from './empleado-admin.controller';
import { EmpleadoAdmin } from './entities/empleado-admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoAdmin]),],
  controllers: [EmpleadoAdminController],
  providers: [EmpleadoAdminService],
  exports:[EmpleadoAdminService]
})
export class EmpleadoAdminModule {}
