import { Box, Center } from "@mantine/core";
import Head from "next/head";
import { Background } from "../components/Index/Background";
import { Typing } from "../components/Index/Typing";
import Root from "../layouts/Root";

export default function Page() {
  return (
    <>
      <Head>
        <title>mrvillage.dev</title>
        <meta name="description" content="mrvillage.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ width: "100%" }}>
        <Center mt="xl">
          <Typing text="mrvillage" />
        </Center>
      </Box>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => {
  return (
    <Background>
      <Root
        headerInheritBackgroundColor
        footerInheritBackgroundColor
        showFooterBody={false}
      >
        {page}
      </Root>
    </Background>
  );
};
