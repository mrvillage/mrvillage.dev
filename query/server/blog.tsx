import { BlogPost } from "../../types/db";
import { serverSupabase } from "../../utils/serverOnly/supabase";

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const response = await serverSupabase
    .from<BlogPost>("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return response.data;
}

interface CreateBlogPostData {
  title: string;
  slug: string;
  tags: string[];
  content: string;
  published: boolean;
  author_id: string;
}

export async function createBlogPostServer(data: CreateBlogPostData) {
  return await serverSupabase.from<BlogPost>("blog_posts").insert(data);
}

interface EditBlogPostData {
  title?: string;
  slug?: string;
  tags?: string[];
  content?: string;
  published?: boolean;
}

export async function editBlogPostServer(id: number, data: EditBlogPostData) {
  return await serverSupabase
    .from<BlogPost>("blog_posts")
    .update(data)
    .eq("id", id);
}
