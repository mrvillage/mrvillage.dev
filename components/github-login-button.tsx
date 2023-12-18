"use client";

import { Icons } from "./icons";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export function GithubLoginButton() {
  return (
    <Button
      onClick={() => signIn("github")}
      variant="ghost"
      size="lg"
      className="px-2 sm:px-4 py-2 h-12 text-2xl hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-10 font-semibold gap-2"
    >
      <Icons.GitHub className="w-8 h-8" />
      Sign in with GitHub
    </Button>
  );
}
