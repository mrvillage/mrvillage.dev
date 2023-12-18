import { GithubLoginButton } from "@/components/github-login-button";
import { HomeButton } from "@/components/home-button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const runtime = "edge";
export default async function LoginPage() {
  if (await auth()) {
    redirect("/dashboard");
  }
  return (
    <div className="relative">
      <HomeButton />
      <div className="flex flex-col items-center text-center justify-center h-[100vh]">
        <GithubLoginButton />
        <div className="text-muted-foreground pt-2">
          If you&apos;re not me, then you can click the button, you just
          won&apos;t actually be able to do anything...so up to you!
        </div>
      </div>
    </div>
  );
}
