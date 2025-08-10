import { Controller, Post, Body } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';

@Controller('asistencia')
export class AsistenciaController {
  constructor(private readonly asistenciaService: AsistenciaService) {}

  @Post()
  async registrar(@Body() dto: CreateAsistenciaDto) {
    const result = await this.asistenciaService.registrar(
      dto.idEmpleado,
      dto.tipo,
    );
    return { message: 'Asistencia registrada', data: result };
  }
}
