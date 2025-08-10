import { Role } from "role/rol.enum";
import { Asistencia } from "src/asistencia/entities/asistencia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmpleadoAdmin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @Column()
  edad: number;

  @Column()
  noDpi: string;

  @Column({ type: 'enum', enum: Role, default: Role.Empleado })
  role: Role;


  @OneToMany(() => Asistencia, (asistencia) => asistencia.empleado)
  asistencias: Asistencia[];
}




