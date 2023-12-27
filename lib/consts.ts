import * as Icons from "@/components/icons";
import { Icon } from "@tabler/icons-react";

export const GITHUB_LINK = "https://github.com/mrvillage";
export const LINKEDIN_LINK = "https://linkedin.com/in/josef-graf";
export const EMAIL_LINK = "mailto:josef@mrvillage.dev";
export const V19_LINK = "https://v19.io";

export const MAIN_PAGE_LINKS = [
  {
    href: GITHUB_LINK,
    Icon: Icons.GitHub,
    text: "GitHub",
  },
  {
    href: LINKEDIN_LINK,
    Icon: Icons.LinkedIn,
    text: "LinkedIn",
  },
  {
    href: EMAIL_LINK,
    Icon: Icons.Email,
    text: "Email",
  },
  {
    href: "/resume.pdf",
    Icon: Icons.Resume,
    text: "Resume",
  },
  {
    href: "/blog",
    Icon: Icons.Blog,
    text: "Blog",
  },
  {
    href: "/projects",
    Icon: Icons.Projects,
    text: "Projects",
  },
  {
    href: "/me",
    Icon: Icons.AboutMe,
    text: "About Me",
  },
  {
    href: V19_LINK,
    Icon: Icons.v19,
    text: "v19.io",
  },
];

export type Status =
  | "Completed"
  | "In Progress"
  | "Abandoned"
  | "Planned"
  | "Backburner"
  | "Participating";

export const STATUS_PRECENDENCE = {
  Abandoned: 0,
  Backburner: 1,
  Planned: 2,
  Participating: 3,
  Completed: 4,
  "In Progress": 5,
};

interface TechnologyData {
  name: string;
  color: string;
  Icon: Icon;
  website?: string;
  label?: string;
}

function typedTechnologies<T extends Record<string, TechnologyData>>(
  technologies: T
): Record<keyof T, TechnologyData> {
  return technologies;
}

export const TECHNOLOGIES = typedTechnologies({
  rust: {
    name: "Rust",
    color: "bg-orange-500 hover:bg-orange-600",
    Icon: Icons.Rust,
    website: "https://www.rust-lang.org/",
    label: "Uses the Rust programming language",
  },
  react: {
    name: "React",
    color: "bg-blue-500 hover:bg-blue-600",
    Icon: Icons.React,
    website: "https://react.dev",
    label: "Uses the React framework",
  },
  typescript: {
    name: "TypeScript",
    color: "bg-blue-500 hover:bg-blue-600",
    Icon: Icons.TypeScript,
    website: "https://typescriptlang.org/",
    label: "Uses the TypeScript programming language",
  },
  nextjs: {
    name: "Next.js",
    color: "bg-gray-900 hover:bg-gray-950",
    Icon: Icons.NextJS,
    website: "https://nextjs.org",
    label: "Uses the Next.js framework",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    color: "bg-blue-500 hover:bg-blue-600",
    Icon: Icons.TailwindCSS,
    website: "https://tailwindcss.com",
    label: "Uses the Tailwind CSS framework",
  },
  cloudflare: {
    name: "Cloudflare",
    color: "bg-orange-500 hover:bg-orange-600",
    Icon: Icons.Cloudflare,
    website: "https://cloudflare.com",
    label: "Uses Cloudflare",
  },
  "cloudflare pages": {
    name: "Cloudflare Pages",
    color: "bg-orange-500 hover:bg-orange-600",
    Icon: Icons.CloudflarePages,
    website: "https://pages.cloudflare.com",
    label: "Hosted on Cloudflare Pages",
  },
  python: {
    name: "Python",
    color: "bg-blue-500 hover:bg-blue-600",
    Icon: Icons.Python,
    website: "https://python.org",
    label: "Uses the Python programming language",
  },
  "discord api": {
    name: "Discord API",
    color: "bg-indigo-500 hover:bg-indigo-600",
    Icon: Icons.Discord,
    website: "https://discord.com/developers/docs/intro",
    label: "Uses the Discord API",
  },
});

export type Technology = keyof typeof TECHNOLOGIES;
