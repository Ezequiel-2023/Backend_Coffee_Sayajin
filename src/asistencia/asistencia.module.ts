import { Module } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { AsistenciaController } from './asistencia.controller';
import { Asistencia } from './entities/asistencia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoAdmin } from 'src/empleado-admin/entities/empleado-admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asistencia, EmpleadoAdmin]),],
  controllers: [AsistenciaController],
  providers: [AsistenciaService],
  exports:[AsistenciaService]
})
export class AsistenciaModule {}
