import type { LoaderFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import type { ShortLink } from "~/models/short_link";

export const loader: LoaderFunction = async ({
  context: { client },
  params: { "*": slug },
}) => {
  console.log(slug);
  try {
    const model = await client
      .collection("short_links")
      .getFirstListItem<ShortLink>(`slug = "${slug}" || id = "${slug}"`);
    return redirect(model.url);
  } catch (e) {
    return redirect(`/?e=short-link-not-found&slug=${slug}`);
  }
};
