import { JwtPayload } from 'Jwt/jwt-payload.interface';

declare module 'express' {
  interface Request {
    user?: JwtPayload;
  }
}
