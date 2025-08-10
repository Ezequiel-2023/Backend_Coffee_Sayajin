import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoAdminDto } from './create-empleado-admin.dto';

export class UpdateEmpleadoAdminDto extends PartialType(CreateEmpleadoAdminDto) {}
