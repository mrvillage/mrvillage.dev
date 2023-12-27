import { Post, allPosts } from "@/.contentlayer/generated";
import { BlogTag } from "@/components/blog-tag";
import { formatDate } from "@/lib/utils";
import { compareDesc } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";
export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a: Post, b: Post) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 gap-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground mt-4">
            I write about things I'm learning, things I'm building, and things
            I'm thinking about.
          </p>
        </div>
      </div>
      <hr className="my-4" />
      {posts?.length ? (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col gap-y-2"
            >
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
                      <BlogTag tag={tag} />
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
      )}
    </div>
  );
}
