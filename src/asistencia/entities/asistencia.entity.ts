import { EmpleadoAdmin } from "src/empleado-admin/entities/empleado-admin.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => EmpleadoAdmin, (emp) => emp.asistencias, { eager: true })
  @JoinColumn({ name: 'empleado_id' })
  empleado: EmpleadoAdmin;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  entrada: Date;

  @Column({ type: 'timestamp', nullable: true })
  salida: Date | null;
}
