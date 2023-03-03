import katex from "katex";
import type { ActionFunction } from "@remix-run/cloudflare";

export const action: ActionFunction = async ({
  request,
  params: { display },
}) => {
  return katex.renderToString(await request.text(), {
    throwOnError: false,
    displayMode: display === "display",
    output: "html",
  });
};

export function headers() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
