import { NextApiRequest } from "next";

export function bodyToJson<T = object>(req: NextApiRequest): T {
  return req.body ? JSON.parse(req.body) : {};
}
