import { NextApiRequest, NextApiResponse } from "next";
import { resBadRequest, resOk } from "../../utils/serverOnly/responses";
import { serverSupabase } from "../../utils/serverOnly/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  if (!name) {
    return resBadRequest(res, "Missing name");
  }
  const response = await serverSupabase
    .from("users")
    .select("name", { count: "exact" })
    .eq("name", name);
  // response.count won't be null
  // @ts-ignore
  return resOk(res, { taken: response.count > 0 });
}
