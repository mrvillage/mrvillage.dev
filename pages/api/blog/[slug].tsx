import { NextApiRequest, NextApiResponse } from "next";
import {
  createBlogPostServer,
  editBlogPostServer,
} from "../../../query/server/blog";
import { getBlogPostBySlug } from "../../../query/server/blog";
import { AllOptional } from "../../../types/fetch";
import { defaultSanitizeContent } from "../../../utils/sanitize";
import {
  resCreated,
  resNotFound,
  resOk,
  resUnauthorized,
} from "../../../utils/serverOnly/responses";
import { handleJWTAuth } from "../../../utils/serverOnly/supabase";

interface PostBody {
  title: string;
  slug: string;
  tags: string[];
  content: string;
  published: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await handleJWTAuth(req, res);
  if (!token) {
    return;
  }
  if (req.method === "POST") {
    if (!token.claims?.admin && !token.claims?.blog) {
      return resUnauthorized(res);
    }
    const data: PostBody = req.body;
    const post = await createBlogPostServer({
      title: defaultSanitizeContent(data.title),
      slug: defaultSanitizeContent(data.slug),
      tags: data.tags.map(defaultSanitizeContent),
      content: defaultSanitizeContent(data.content),
      published: data.published,
      author_id: token.id,
    });
    resCreated(res, post);
  } else if (req.method === "PATCH") {
    if (!token.claims?.admin && !token.claims?.blog) {
      return resUnauthorized(res);
    }
    const data: AllOptional<PostBody> = req.body;
    const post = await getBlogPostBySlug(req.query.slug as string);
    if (!post) {
      return resNotFound(res, "Post not found");
    }
    if (!token.claims?.admin && token.id !== post.author_id) {
      return resUnauthorized(res);
    }
    const editedPost = await editBlogPostServer(post.id, {
      title: data.title && defaultSanitizeContent(data.title),
      slug: data.slug && defaultSanitizeContent(data.slug),
      tags: data.tags && data.tags.map(defaultSanitizeContent),
      content: data.content && defaultSanitizeContent(data.content),
      published: data.published === undefined ? undefined : data.published,
    });
    resOk(res, editedPost);
  } else if (req.method === "GET") {
    const post = await getBlogPostBySlug(req.query.slug as string);
    if (!post) {
      return resNotFound(res, "Post not found");
    }
    if (
      post.published &&
      (token.claims?.admin || token.id === post.author_id)
    ) {
      resOk(res, post);
    } else {
      resUnauthorized(res);
    }
  }
}
