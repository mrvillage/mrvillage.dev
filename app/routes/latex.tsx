import katex from "katex";
import { json } from "@remix-run/cloudflare";
import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";

function createRes(text: string, display: string | undefined): Response {
  const res = json({
    html: katex.renderToString(text, {
      throwOnError: false,
      displayMode: display === "display",
      output: "html",
    }),
  });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

export const action: ActionFunction = async ({
  request,
  params: { display },
}) => {
  return createRes(await request.text(), display);
};

export const loader: LoaderFunction = async ({
  params: { display, latex },
}) => {
  return createRes(latex || "", display);
};
