// src/auth/jwt-payload.interface.ts
export interface JwtPayload {
  email: string;
  sub: number; // or any other identifier like user ID
}
