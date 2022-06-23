import { createClient } from "@supabase/supabase-js";
import { jwtVerify } from "jose";
import { NextApiRequest, NextApiResponse } from "next";
import { Token } from "../../types/token";
import { resUnauthorized } from "./responses";

const JWT_SECRET = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET);

export const serverSupabase = createClient(
  // @ts-ignore
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function verifyJWT(jwt: string) {
  const { payload } = await jwtVerify(jwt, JWT_SECRET);
  return payload;
}

export async function handleJWTAuth(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Token | false> {
  const auth = req.headers.authorization?.match("Bearer (.*)");
  if (auth && auth.length) {
    const token = auth[1];
    try {
      const payload: any = await verifyJWT(token);
      return {
        id: payload.sub,
        email: payload.email,
        claims: payload.user_metadata.claims,
      };
    } catch (e) {
      resUnauthorized(res);
    }
  }
  resUnauthorized(res);
  return false;
}
