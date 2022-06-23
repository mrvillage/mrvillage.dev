import { BlogPost } from "../../types/db";
import { QueryResponse } from "../../types/fetch";
import { getRequest, patchRequest, postRequest } from "../../utils/fetch";

interface CreateBlogPostData {
  title: string;
  slug: string;
  tags: string[];
  content: string;
  published: boolean;
}

export function createBlogPost(
  reqData: CreateBlogPostData
): QueryResponse<BlogPost> {
  return postRequest<BlogPost>(`/api/blog/${reqData.slug}`, reqData);
}

interface IsSlugTakenData {
  taken: boolean;
}

export function isSlugTaken(slug: string): QueryResponse<IsSlugTakenData> {
  return getRequest(`/api/blog/slug-taken?slug=${slug}`);
}

interface EditBlogPostData {
  title?: string;
  slug?: string;
  tags?: string[];
  content?: string;
  published?: boolean;
}

export function editBlogPost(
  id: number,
  reqData: EditBlogPostData
): QueryResponse<BlogPost> {
  return patchRequest<BlogPost>(`/api/blog/edit/${id}`, reqData);
}
