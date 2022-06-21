import { NextApiRequest } from "next";

export function bodyToJson(req: NextApiRequest) {
  return req.body ? JSON.parse(req.body) : {};
}
