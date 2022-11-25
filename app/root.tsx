import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { createEmotionCache, createStyles } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import Providers from "~/context/Providers";
import { ClientProvider } from "./hooks/client";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "mrvillage",
  viewport: "width=device-width,initial-scale=1",
  description: "mrvillage.dev",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/pnw.png",
      type: "image/png",
    },
  ];
};

export const loader: LoaderFunction = ({ request }) => {
  return { loaderCookie: request.headers.get("Cookie") };
};

createEmotionCache({ key: "mantine" });

const useStyles = createStyles((theme) => ({
  body: {
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.colors.gray[5]} ${theme.colors.gray[0]}`,
    minHeight: "100vh",
  },
}));

export default function App() {
  const { loaderCookie } = useLoaderData();
  const { classes } = useStyles();
  return (
    <ClientProvider loaderCookie={loaderCookie || ""}>
      <Providers>
        <html lang="en">
          <head>
            <StylesPlaceholder />
            <Meta />
            <Links />
          </head>
          <body className={classes.body}>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </body>
        </html>
      </Providers>
    </ClientProvider>
  );
}
