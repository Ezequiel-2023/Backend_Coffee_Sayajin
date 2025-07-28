import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SecretService {
  private readonly saltRounds = 10;

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    if (!plainPassword || !hashedPassword) {
      console.error('❌ Contraseña o hash no proporcionados:', {
        plainPassword,
        hashedPassword,
      });
      throw new Error('Faltan argumentos para comparar contraseñas');
    }

    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
