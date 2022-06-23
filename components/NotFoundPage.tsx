import Head from "next/head";
import ErrorPage from "./ErrorPage";
import image from "../public/assets/404.svg";

export function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <main>
        <ErrorPage image={image} notfound={true} />
      </main>
    </>
  );
}
