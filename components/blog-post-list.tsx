import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { BlogTag } from "./blog-tag";
import Link from "next/link";
import { Post } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

interface BlogPostListProps {
  posts: Post[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  return posts?.length ? (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
      {posts
        .sort((a: Post, b: Post) => {
          return compareDesc(new Date(a.date), new Date(b.date));
        })
        .map((post, index) => (
          <article key={post._id} className="relative flex flex-col gap-y-2">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={804}
                height={452}
                className="rounded-md border bg-muted transition-colors"
                priority={index <= 1}
              />
            )}
            <h2 className="text-2xl font-bold">{post.title}</h2>
            {post.description && (
              <p className="text-muted-foreground">{post.description}</p>
            )}
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <time
                dateTime={post.date}
                className="text-sm text-muted-foreground"
              >
                {formatDate(post.date)}
              </time>
              {post.tags.length && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <BlogTag tag={tag} key={tag} />
                  ))}
                </div>
              )}
            </div>
            <Link href={post.slug} className="absolute inset-0">
              <span className="sr-only">View Article</span>
            </Link>
          </article>
        ))}
    </div>
  ) : (
    <p className="text-xl text-muted-foreground">No posts found.</p>
  );
}
