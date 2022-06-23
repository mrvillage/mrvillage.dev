import { Title, TypographyStylesProvider } from "@mantine/core";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getBlogPostBySlug } from "../../../query/server/blog";
import { BlogPost } from "../../../types/db";
import NotFoundPage from "../../_error";

interface PageProps {
  post: BlogPost | null;
}

export default function Page({ post }: PageProps) {
  if (!post) {
    return <NotFoundPage />;
  }
  return (
    <>
      <Title align="center">{post.title}</Title>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </TypographyStylesProvider>
    </>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PageProps>> {
  const { slug } = context.query;
  const post = await getBlogPostBySlug(slug as string);
  return { props: { post } };
}
