import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    authors: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "enum", options: ["Engineering", "Personal"] },
      required: true,
    },
  },
  computedFields,
}));

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: "authors/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    bio: {
      type: "string",
    },
    avatar: {
      type: "string",
      required: true,
    },
    website: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/**/*.mdx",
  contentType: "mdx",
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
    status: {
      type: "enum",
      options: [
        "Completed",
        "In Progress",
        "Planned",
        "Abandoned",
        "Backburner",
        "Participating",
      ],
      required: true,
    },
    github: {
      type: "string",
    },
    docs: {
      type: "string",
    },
    website: {
      type: "string",
    },
    crate: {
      type: "string",
    },
    npm: {
      type: "string",
    },
    pypi: {
      type: "string",
    },
    technologies: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    content: {
      type: "boolean",
      default: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Author, Page, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: "" }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
