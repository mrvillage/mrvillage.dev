import katex from "katex";
import type { ActionFunction } from "@remix-run/cloudflare";

export const action: ActionFunction = async ({ request }) => {
  return katex.renderToString(await request.text(), {
    throwOnError: false,
  });
};
