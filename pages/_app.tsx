import { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import Root from "../layouts/Root";
import { AppContextProvider } from "../context/AppContext";
import Providers from "../context/Providers";
import { NextPageWithLayout } from "../types/layout";

type AppProps = NextAppProps & {
  Component: NextPageWithLayout;
};

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? Root.getLayout;

  return (
    <>
      <Head>
        <title>mrvillage.dev</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppContextProvider>
        <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
      </AppContextProvider>
    </>
  );
}
