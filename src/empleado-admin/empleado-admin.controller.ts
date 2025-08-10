import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoAdminService } from './empleado-admin.service';
import { CreateEmpleadoAdminDto } from './dto/create-empleado-admin.dto';
import { UpdateEmpleadoAdminDto } from './dto/update-empleado-admin.dto';

@Controller('empleado-admin')
export class EmpleadoAdminController {
  constructor(private readonly empleadoAdminService: EmpleadoAdminService) {}

  @Post()
  async create(@Body() createEmpleadoAdminDto: CreateEmpleadoAdminDto) {
    return await this.empleadoAdminService.create(createEmpleadoAdminDto);
  }

  @Get()
  async findAll() {
    return await this.empleadoAdminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.empleadoAdminService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmpleadoAdminDto: UpdateEmpleadoAdminDto,
  ) {
    return await this.empleadoAdminService.update(+id, updateEmpleadoAdminDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.empleadoAdminService.remove(+id);
    return { message: `Usuario con id ${id} eliminado correctamente` };
  }
}
