import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SecretService } from 'src/secret/secret.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly encrypt: SecretService,
  ) {}

  async login(email: string, pass: string): Promise<{ access_token: string }> {
    // Busca el usuario por email
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    // Verifica la contraseña
    const isPasswordValid = await this.encrypt.comparePasswords(
      pass,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Crea el payload para el JWT
    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
