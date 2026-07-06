import Link from "next/link";
import * as Icons from "@/components/icons";
import {
  EMAIL_LINK,
  GITHUB_LINK,
  KANRI_LINK,
  LINKEDIN_LINK,
} from "@/lib/consts";

const LINKS = [
  { href: GITHUB_LINK, Icon: Icons.GitHub, label: "GitHub", target: "_blank" },
  {
    href: LINKEDIN_LINK,
    Icon: Icons.LinkedIn,
    label: "LinkedIn",
    target: "_blank",
  },
  { href: EMAIL_LINK, Icon: Icons.Email, label: "Email", target: undefined },
  {
    href: "/resume.pdf",
    Icon: Icons.Resume,
    label: "Resume",
    target: "_blank",
  },
  // { href: KANRI_LINK, Icon: Icons.Code, label: "Kanri", target: "_blank" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-taupe-800/60 bg-neutral-900/70 backdrop-blur-md">
      <div className="container flex h-14 max-w-4xl items-center justify-center">
        <nav className="flex items-center gap-1 sm:gap-2">
          {LINKS.map(({ href, Icon, label, target }) => (
            <Link
              key={label}
              href={href}
              target={target}
              className="flex items-center gap-1.5 rounded-md px-2 sm:px-3 py-1.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-taupe-800/50 hover:text-taupe-100"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
