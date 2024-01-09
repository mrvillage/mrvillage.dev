import { allPosts } from "@/.contentlayer/generated";
import { BlogListPage } from "@/components/blog-list-page";

export default function EngineeringBlogPage() {
  const posts = allPosts.filter(
    (post) => post.published && post.tags.includes("Engineering")
  );

  return (
    <BlogListPage
      posts={posts}
      title="Engineering Blog"
      description="I write about things I'm learning, things I'm building, and things I'm thinking about."
    />
  );
}
