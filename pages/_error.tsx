import Head from "next/head";
import ErrorPage from "../components/ErrorPage";
import image from "../public/assets/error.svg";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Uh oh</title>
        <meta name="description" content="Uh oh" />
      </Head>
      <main>
        <ErrorPage image={image} />
      </main>
    </>
  );
}
