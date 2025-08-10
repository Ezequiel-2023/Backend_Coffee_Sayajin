import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull, Raw } from 'typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { EmpleadoAdmin } from 'src/empleado-admin/entities/empleado-admin.entity';

@Injectable()
export class AsistenciaService {
  constructor(
    @InjectRepository(Asistencia)
    private asistenciaRepo: Repository<Asistencia>,
    @InjectRepository(EmpleadoAdmin)
    private empleadoRepo: Repository<EmpleadoAdmin>,
  ) {}

  async registrar(idEmpleado: number, tipo: 'entrada' | 'salida') {
    const empleado = await this.empleadoRepo.findOne({
      where: { id: idEmpleado },
    });
    if (!empleado) throw new NotFoundException('Empleado no encontrado');

    const now = new Date();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fechaHoy = now.toISOString().split('T')[0]; // yyyy-mm-dd

    if (tipo === 'entrada') {
      // Validar si ya se registró una entrada hoy
      const yaExisteEntradaHoy = await this.asistenciaRepo.findOne({
        where: {
          empleado: { id: idEmpleado },
          fecha: Raw((alias) => `${alias} = CURRENT_DATE`), // evita diferencias de zonas horarias
        },
      });

      if (yaExisteEntradaHoy) {
        throw new BadRequestException(
          'Ya se registró una entrada hoy para este empleado',
        );
      }

      const asistencia = this.asistenciaRepo.create({
        empleado,
        fecha: now,
        entrada: now,
      });
      return this.asistenciaRepo.save(asistencia);
    }

    // tipo === 'salida'
    const asistencia = await this.asistenciaRepo.findOne({
      where: {
        empleado: { id: idEmpleado },
        salida: IsNull(),
      },
      order: { entrada: 'DESC' },
    });

    if (!asistencia) {
      throw new BadRequestException(
        'No hay una entrada activa para registrar la salida',
      );
    }

    asistencia.salida = now;
    return this.asistenciaRepo.save(asistencia);
  }

  // Aquí puedes agregar más métodos, como listar asistencias por fecha o por empleado
}
