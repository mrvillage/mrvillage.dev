import { allPosts } from "@/.contentlayer/generated";
import { BlogListPage } from "@/components/blog-list-page";

export const runtime = "edge";
export default async function BlogPage() {
  const posts = allPosts.filter((post) => post.published);

  return (
    <BlogListPage
      posts={posts}
      title="Blog"
      description="I write about things I'm learning, things I'm building, and things I'm thinking about."
    />
  );
}
