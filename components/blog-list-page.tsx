import { Post } from "@/.contentlayer/generated";
import { BlogPostList } from "./blog-post-list";

interface BlogListPageProps {
  posts: Post[];
  title: string;
  description: string;
}

export function BlogListPage({ posts, title, description }: BlogListPageProps) {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 gap-y-4">
          <h1 className="inline-block font-heading font-semibold text-4xl tracking-tight lg:text-5xl">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mt-4">{description}</p>
        </div>
      </div>
      <hr className="my-4" />
      <BlogPostList posts={posts} />
    </div>
  );
}
