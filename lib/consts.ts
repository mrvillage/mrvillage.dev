import * as Icons from "@/components/icons";
import { Icon } from "@tabler/icons-react";
import { AnchorHTMLAttributes } from "react";

export const GITHUB_LINK = "https://github.com/mrvillage";
export const LINKEDIN_LINK = "https://linkedin.com/in/josef-graf";
export const EMAIL_LINK = "mailto:josef@mrvillage.dev";
export const V19_LINK = "https://v19.io";

export const MAIN_PAGE_LINKS: {
  href: string;
  Icon: Icon;
  text: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}[] = [
  {
    href: GITHUB_LINK,
    Icon: Icons.GitHub,
    text: "GitHub",
    target: "_blank",
  },
  {
    href: LINKEDIN_LINK,
    Icon: Icons.LinkedIn,
    text: "LinkedIn",
    target: "_blank",
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
    target: "_blank",
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
    target: "_blank",
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
  stripe: {
    name: "Stripe",
    color: "bg-purple-500 hover:bg-purple-600",
    Icon: Icons.Stripe,
    website: "https://stripe.com",
    label: "Uses Stripe",
  },
  php: {
    name: "PHP",
    color: "bg-purple-500 hover:bg-purple-600",
    Icon: Icons.PHP,
    website: "https://php.net",
    label: "Uses the PHP programming language",
  },
  laravel: {
    name: "Laravel",
    color: "bg-red-500 hover:bg-red-600",
    Icon: Icons.Laravel,
    website: "https://laravel.com",
    label: "Uses the Laravel framework",
  },
  css: {
    name: "CSS",
    color: "bg-blue-500 hover:bg-blue-600",
    Icon: Icons.CSS,
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    label: "Uses CSS",
  },
  html: {
    name: "HTML",
    color: "bg-orange-500 hover:bg-orange-600",
    Icon: Icons.HTML,
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    label: "Uses HTML",
  },
  mysql: {
    name: "MySQL",
    color: "bg-blue-500 hover:bg-blue-600",
    Icon: Icons.MySQL,
    website: "https://mysql.com",
    label: "Uses MySQL",
  },
  linux: {
    name: "Linux",
    color: "bg-yellow-500 hover:bg-yellow-600",
    Icon: Icons.Debian,
    website: "https://linux.org",
    label: "Uses Linux",
  },
  graphql: {
    name: "GraphQL",
    color: "bg-pink-500 hover:bg-pink-600",
    Icon: Icons.GraphQL,
    website: "https://graphql.org",
    label: "Uses GraphQL",
  },
});

export type Technology = keyof typeof TECHNOLOGIES;
