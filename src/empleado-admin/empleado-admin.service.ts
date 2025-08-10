import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoAdminDto } from './dto/create-empleado-admin.dto';
import { UpdateEmpleadoAdminDto } from './dto/update-empleado-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpleadoAdmin } from './entities/empleado-admin.entity';
import { Repository } from 'typeorm';
import { Role } from 'role/rol.enum';

@Injectable()
export class EmpleadoAdminService {
  constructor(
    @InjectRepository(EmpleadoAdmin)
    private readonly empleadoAdminRepository: Repository<EmpleadoAdmin>,
  ) {}

  async create(createEmpleadoAdminDto: CreateEmpleadoAdminDto) {
    const empleado = this.empleadoAdminRepository.create({
      ...createEmpleadoAdminDto,
      role: createEmpleadoAdminDto.rol ?? Role.Empleado
    })
    return this.empleadoAdminRepository.save(empleado);
  }

  async findAll():Promise<EmpleadoAdmin[]> {
    return this.empleadoAdminRepository.find();
  }

  async findOne(id: number) {
    const empleado = await this.empleadoAdminRepository.findOneBy({ id });
    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }
    return empleado;
  }

 async update(id: number, updateUserDto: UpdateEmpleadoAdminDto): Promise<EmpleadoAdmin> {
     const user = await this.empleadoAdminRepository.preload({
       id,
       ...updateUserDto,
     });
     if (!user) {
       throw new NotFoundException(`Usuario con id ${id} no encontrado`);
     }
     return await this.empleadoAdminRepository.save(user);
   }
 
   async remove(id: number): Promise<void> {
     const result = await this.empleadoAdminRepository.delete(id);
     if (result.affected === 0) {
       throw new NotFoundException(`Usuario con id ${id} no encontrado`);
     }
   }
 }

