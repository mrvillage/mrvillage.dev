import { allPosts } from "@/.contentlayer/generated";
import { BlogListPage } from "@/components/blog-list-page";

export default function PersonalBlogPage() {
  const posts = allPosts.filter(
    (post) => post.published && post.tags.includes("Personal")
  );

  return (
    <BlogListPage
      posts={posts}
      title="Personal Blog"
      description="I write about things in my life that I want to share with the world."
    />
  );
}
