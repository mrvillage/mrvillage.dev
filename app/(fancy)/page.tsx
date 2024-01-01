import { Typing } from "@/components/typing";
import { buttonVariants } from "@/components/ui/button";
import { MAIN_PAGE_LINKS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="pt-[30vh] text-center flex justify-center">
        <Typing
          role="heading"
          aria-level={1}
          text="mrvillage"
          caretIterations="15"
        />
      </div>
      <div className="text-center">
        <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center text-center px-4 pt-14 gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-6">
          {MAIN_PAGE_LINKS.map(({ href, Icon, text, target }) => (
            <Link
              key={text}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "px-2 sm:px-4 py-2 h-12 text-2xl hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-10 font-semibold gap-2"
              )}
              href={href}
              target={target}
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
