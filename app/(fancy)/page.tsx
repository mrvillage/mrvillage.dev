import { Icons } from "@/components/icons";
import { Typing } from "@/components/typing";
import { buttonVariants } from "@/components/ui/button";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK, V19_LINK } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const LINKS = [
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
    href: "/resume",
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
    href: "/about",
    Icon: Icons.AboutMe,
    text: "About Me",
  },
  {
    href: V19_LINK,
    Icon: Icons.v19,
    text: "v19.io",
  },
];

export default function Home() {
  return (
    <>
      <div className="pt-[30vh] text-center flex justify-center">
        <Typing text="mrvillage" caretIterations="15" />
      </div>
      <div className="text-center">
        <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center text-center px-4 pt-14 gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-6">
          {LINKS.map(({ href, Icon, text }) => (
            <Link
              key={text}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "px-2 sm:px-4 py-2 h-12 text-2xl hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-10 font-semibold gap-2"
              )}
              href={href}
            >
              <Icon className="h-8 w-8" />{" "}
              <span className="w-full text-center">{text}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
