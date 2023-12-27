import { Post } from "@/.contentlayer/generated";
import { BlogPostList } from "./blog-post-list";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import * as Icons from "@/components/icons";

interface BlogListPageProps {
  posts: Post[];
  title: string;
  description: string;
}

export function BlogListPage({ posts, title, description }: BlogListPageProps) {
  return (
    <div className="container relative max-w-4xl py-6 lg:py-10">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-150px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.Back className="mr-2 h-4 w-4" /> Home
      </Link>
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
