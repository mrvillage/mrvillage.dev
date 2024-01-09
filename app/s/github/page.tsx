import { GITHUB_LINK } from "@/lib/consts";
import { redirect } from "next/navigation";

export default function Page() {
  redirect(GITHUB_LINK);
}
