import { ColumnType, Selectable } from "kysely";

export interface LinkTable {
  slug: string;
  url: string;
  created_at: ConstantDate;
}

export type Link = Selectable<LinkTable>;

// DATABASE TYPES
export interface Database {
  links: LinkTable;
}

export type ConstantDate = ColumnType<string, string | undefined, never>;
export type ConstantUuid = ColumnType<string, string, never>;
export type DbDate = ColumnType<string, string | undefined, string | undefined>;
