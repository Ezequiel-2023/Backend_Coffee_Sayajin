import { IsIn, IsInt } from "class-validator";

export class CreateAsistenciaDto {
  @IsInt()
  idEmpleado: number;

  @IsIn(['entrada', 'salida'])
  tipo: 'entrada' | 'salida';
}
