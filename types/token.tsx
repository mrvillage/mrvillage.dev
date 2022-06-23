export interface TokenClaims {
  admin?: boolean;
  dnd?: boolean;
  blog?: boolean;
}

export interface Token {
  id: string;
  email: string;
  claims?: TokenClaims;
}
