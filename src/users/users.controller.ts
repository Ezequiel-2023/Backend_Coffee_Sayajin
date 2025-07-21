import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'role/rol.enum';
import { Roles } from 'role/roles.decorador';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(Role.Admin) // Assuming you have a role guard set up
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.usersService.findOne(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.usersService.remove(Number(id));
    return { message: `Usuario con id ${id} eliminado` };
  }

  // Endpoint para buscar usuario por email (útil para login)
  @Get('buscar/email')
  async findByEmail(@Query('email') email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return { message: 'Usuario no encontrado' };
    }
    return user;
  }
}
