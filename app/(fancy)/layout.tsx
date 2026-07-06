import dynamic from "next/dynamic";
import { SiteNav } from "@/components/site-nav";

const Background = dynamic(() => import("@/components/background"), {
  ssr: false,
});

export default function FancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Background />
      <div className="relative flex min-h-screen flex-col">
        <SiteNav />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
