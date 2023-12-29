import { notFound } from "next/navigation";
import { db } from "./db";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const res = await db
    .selectFrom("links")
    .select("url")
    .where("slug", "=", slug)
    .executeTakeFirst();
  if (!res) {
    return notFound();
  }
  return new Response(null, {
    status: 301,
    headers: {
      Location: res.url,
    },
  });
}
