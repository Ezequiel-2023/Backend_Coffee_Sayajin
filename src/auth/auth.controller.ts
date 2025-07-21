import { Controller, Post, Body, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private  authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<{ access_Token: string }> {
    if (!email || !password) {
      throw new UnauthorizedException('Email y contraseña son requeridos');
    }
    const result = await this.authService.login(email, password);
    return { access_Token: result.access_token };
  }
}
