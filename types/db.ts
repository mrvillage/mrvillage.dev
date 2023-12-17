import { ColumnType, Selectable } from "kysely";

export interface LinkTable {
  id: ConstantUuid;
  url: string;
  slug: string;
  name: string;
  created_at: ConstantDate;
}

// AUTH
export interface AccountTable {
  id: ConstantUuid;
  userId: ConstantUuid;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
  oauth_token_secret: string | null;
  oauth_token: string | null;
}
export type Account = Selectable<AccountTable>;

export interface SessionTable {
  id: ConstantUuid;
  sessionToken: string;
  userId: ConstantUuid;
  expires: Date;
}
export type Session = Selectable<SessionTable>;

export interface UserTable {
  id: ConstantUuid;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
}
export type User = Selectable<UserTable>;

export interface VerificationTokenTable {
  identifier: ConstantUuid;
  token: string;
  expires: Date;
}
export type VerificationToken = Selectable<VerificationTokenTable>;
//
// DATABASE TYPES
export interface Database {
  links: LinkTable;

  accounts: AccountTable;
  sessions: SessionTable;
  users: UserTable;
  verification_tokens: VerificationTokenTable;
}

export type ConstantDate = ColumnType<string, string | undefined, never>;
export type ConstantUuid = ColumnType<string, string, never>;
export type DbDate = ColumnType<string, string | undefined, string | undefined>;
