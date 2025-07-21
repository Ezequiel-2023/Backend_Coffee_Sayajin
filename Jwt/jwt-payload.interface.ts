import { Role } from "role/rol.enum";

export interface JwtPayload {
  sub: number; // o string, si tu ID de usuario es string
  name: string;
  email: string;
  role: Role[];
}
