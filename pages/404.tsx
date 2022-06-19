import Head from "next/head";
import ErrorPage from "../components/ErrorPage";
import image from "../public/assets/404.svg";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <main>
        <ErrorPage image={image} />
      </main>
    </>
  );
}
