import katex from "katex";
import { json } from "@remix-run/cloudflare";
import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";

export const action: ActionFunction = async ({
  request,
  params: { display },
}) => {
  const res = json({
    html: katex.renderToString(await request.text(), {
      throwOnError: false,
      displayMode: display === "display",
      output: "html",
    }),
  });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
};

export const loader: LoaderFunction = async ({
  params: { display, latex },
}) => {
  return new Response(latex);
  const res = new Response(
    katex.renderToString(latex || "", {
      throwOnError: false,
      displayMode: display === "display",
      output: "html",
    })
  );
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  res.headers.set("Content-Type", "text/html");
  return res;
};
