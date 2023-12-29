import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import * as Icons from "./icons";

export function HomeButton() {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "hidden md:inline-flex absolute left-0 top-0 ml-4 mt-4"
      )}
    >
      <>
        <Icons.Back className="mr-2 h-4 w-4" /> Back
      </>
    </Link>
  );
}
