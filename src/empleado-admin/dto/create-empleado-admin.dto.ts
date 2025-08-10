import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Role } from "role/rol.enum";

export class CreateEmpleadoAdminDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  name: string;

  @IsOptional()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido?: string;

  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  telefono?: string;

  @IsOptional()
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  direccion?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: 'La edad es obligatoria' })
  edad?: number;

  @IsOptional()
  @IsString({ message: 'El No de DPI debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El No de DPI es obligatorio' })
  noDpi?: string;

  @IsOptional()
  @IsEnum(Role, { message: 'El rol debe ser Empleado, admin o empleado' })
  rol?: Role;
}
