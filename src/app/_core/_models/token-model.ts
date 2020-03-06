export interface TokenModel {
  sub: string;
  roles: string[];
  iat: number;
  exp: number;
}