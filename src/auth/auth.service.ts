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

  async login(email: string, pass: string): Promise<{ token: string }> {
    try {
      const user = await this.usersService.findByEmail(email);

      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }

      const isPasswordValid = await this.encrypt.comparePasswords(
        pass,
        user.password,
      );

      if (!isPasswordValid) {
        throw new UnauthorizedException('Credenciales inválidas');
      }

      console.log('✅ Contraseña verificada correctamente para:', user.email);

      const payload = {
        sub: user.id,
        name: user.name,
        email: user.email,
      };

      const token = await this.jwtService.signAsync(payload);
      console.log('🔐 Token JWT generado:', token);

      return { token };
    } catch (error) {
      console.error('🔥 ERROR INTERNO EN LOGIN:', error);
      throw error; // sigue lanzando para que llegue al cliente con 401 o 500
    }
  }
}
