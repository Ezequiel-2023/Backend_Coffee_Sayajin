import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsOptional,
  IsNumber,
} from 'class-validator';

export enum Role {
  cliente = 'cliente',
  admin = 'admin',
  empleado = 'empleado',
}

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
  @IsNumber({}, { message: 'El token debe ser un número' })
  tokenNumber: number;

  @IsOptional()
  @IsString()
  role: Role = Role.cliente;
}
