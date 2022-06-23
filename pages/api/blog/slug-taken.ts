import { NextApiRequest, NextApiResponse } from "next";
import { resBadRequest, resOk } from "../../../utils/serverOnly/responses";
import { serverSupabase } from "../../../utils/serverOnly/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  if (!slug) {
    return resBadRequest(res, "Missing slug");
  }
  const response = await serverSupabase
    .from("blog_posts")
    .select("slug", { count: "exact" })
    .eq("slug", slug);
  // response.count won't be null
  // @ts-ignore
  return resOk(res, { taken: response.count > 0 });
}
