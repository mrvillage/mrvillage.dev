import { binding } from "cf-bindings-proxy";
import { Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";
import { Database } from "@/types/db";
import { D1Database } from "@cloudflare/workers-types";

export const d1 = binding<D1Database>("DB");
export const db = new Kysely<Database>({
  dialect: new D1Dialect({ database: binding<D1Database>("DB") }),
});
