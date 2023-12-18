import { auth, isAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const runtime = "edge";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(await auth());
  if (!(await isAdmin())) {
    redirect("/");
  }
  return <>{children}</>;
}
