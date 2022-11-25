import type { Record } from "pocketbase";

type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;

type KnownRecord = Pick<Record, KnownKeys<Record>>;

export interface ShortLink extends KnownRecord {
  id: string;
  name: string;
  description: string;
  slug: string;
  url: string;
  private: boolean;
}
