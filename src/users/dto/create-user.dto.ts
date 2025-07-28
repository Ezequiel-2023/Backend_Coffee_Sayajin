import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { Role } from 'role/rol.enum';



export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  name: string;

  @IsOptional()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido?: string;

  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;


  @IsOptional()
  @IsEnum(Role, { message: 'El rol debe ser cliente, admin o empleado' })
  rol?: Role;
}
