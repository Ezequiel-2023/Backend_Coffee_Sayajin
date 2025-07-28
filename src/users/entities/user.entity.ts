import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Role } from '../../../role/rol.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.Cliente })
  role: Role;

}
  
