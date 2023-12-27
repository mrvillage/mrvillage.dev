import { notFound } from "next/navigation";
import { allAuthors, allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/mdx/mdx";

import "@/styles/mdx.css";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { absoluteUrl, cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import * as Icons from "@/components/icons";
import { env } from "@/lib/env";
import { BlogTag } from "@/components/blog-tag";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("?");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");

  return {
    metadataBase: new URL(url),
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({ name: author })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export const runtime = "edge";
export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  );

  return (
    <article className="container relative max-w-3xl pt-6 lg:pt-8 pb-2">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.Back className="mr-2 h-4 w-4" /> More posts
      </Link>
      <h1 className="mt-2 inline-block font-semibold text-4xl leading-tight lg:text-5xl">
        {post.title}
      </h1>
      {post.tags.length ? (
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag) => (
            <Link href={`/blog/tag/${tag}`} key={tag}>
              <BlogTag tag={tag} />
            </Link>
          ))}
        </div>
      ) : null}
      <hr className="mt-4 mb-2" />
      {post.description && (
        <p className="text-lg text-muted-foreground">{post.description}</p>
      )}
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="mt-2 rounded border bg-muted transition-colors"
          priority
        />
      )}
      <div className="flex justify-between mt-3">
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
        )}
        <p className="block text-sm text-muted-foreground">
          {Math.round(post.body.code.split(" ").length / 200)} min read
        </p>
      </div>
      {authors?.length ? (
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
          {authors.map((author) => {
            if (!author) {
              return null;
            }
            const inner = (
              <div className="flex items-center gap-x-2 text-sm">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={42}
                  height={42}
                  className="rounded-full bg-white"
                />
                <div className="flex-1 text-left leading-tight">
                  <p className="font-bold">{author.name}</p>
                  {author.bio && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {author.bio}
                    </p>
                  )}
                </div>
              </div>
            );
            return author.website ? (
              <Link href={author.website} key={author._id}>
                {inner}
              </Link>
            ) : (
              inner
            );
          })}
        </div>
      ) : null}
      <hr className="my-4" />
      <Mdx code={post.body.code} path={post._raw.flattenedPath} />
      <hr className="mt-6" />
      <div className="flex justify-center py-4 lg:py-6">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.Back className="mr-2 h-4 w-4" /> More posts
        </Link>
      </div>
    </article>
  );
}
